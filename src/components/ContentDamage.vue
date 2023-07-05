<template>
  <div>
    <h2 style="color:red">此处伤害计算以未开灵动状态，1小时的连续输出做为计算依据</h2>
  </div>
  <div class="topOption">
    <div class="left_val">
      <el-form :model="skillData" :inline="true" ref="formRef">
        <template v-for="(item, index) in skillData" :key="index">
          <el-row>
            <el-col :span="6">
              <el-form-item label="所用武功">
                <el-input v-model="item.name"/>
              </el-form-item>
            </el-col>
            <el-col :span="9">
              <el-form-item label="人物攻击">
                <el-input v-model="item.damage" type="number"/>
              </el-form-item>
            </el-col>
            <el-col :span="5">
              <el-form-item label="攻击速度">
                <el-input v-model="item.speed" type="number"/>
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <el-button type="primary" @click="onAddSkill(index)" :disabled="skillData.length>=5?true:false"> +
              </el-button>
              <el-button type="primary" @click="onDeleteSkill(index)" :disabled="skillData.length<=1?true:false"> -
              </el-button>
            </el-col>
          </el-row>
        </template>
      </el-form>

    </div>
    <div class="right_option">
      <el-button type="primary" @click="showDamageLine('formRef')">查看</el-button>
    </div>
  </div>
  <div class="echarts" style="background: white">
    <div id="chartHolder" style="height: 600px;width: 900px;"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import {ElMessage} from 'element-plus'
import {markRaw} from "vue";

export default {
  data() {
    return {
      isDebug: 'development' === process.env.NODE_ENV,
      input: '',
      skillData: [ {name: '神罚', speed: 85, damage: 4823},{name: '梅花枪法', speed: 69, damage: 3877}],
      myChart:null
    }
  },
  created() {
    this.showLog(this.$route.path, "页面开始创建中")
  },
  mounted() {
    this.showLog(this.$route.path, "Mounted")
    // this.showDamageData()
  },
  methods: {
    onAddSkill(i) {
      this.skillData.splice(i + 1, 0, {name: '', speed: '', damage: ''})
    },
    onDeleteSkill(i) {
      this.skillData.splice(i, 1)
    },
    showDamageLine(formName) {
      this.showLog(formName)
      this.showLog(this.skillData)
      // if (!this.$refs[formName]) return
      // this.$refs[formName].validate((valid) => {
      //   if (valid) {
      //     console.log('submit!')
      //   } else {
      //     console.log('error submit!')
      //     return false
      //   }
      // })
      let isChecked = true
      isChecked = this.fillData()
      if (!isChecked) {
        ElMessage.error('请检查所有输入框是否正确填写')
        this.showChart({})
        return
      }
    },
    fillData() {
      console.log("fillData")
      if (this.skillData.length === 0) {
        return false
      }
      let tmpData = {
        title: {
          text: '伤害走势图'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: []
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: []
        },
        yAxis: {
          type: 'value',
          show:true
        },
        series: []
      }
      let legendList = []
      let seriesList = []
      let xAxisData = []
      for (let i = 2000; i <= 6000; i = i + 100) {
        xAxisData.push(i)
      }
      tmpData.xAxis.data = xAxisData
      for (const skill of this.skillData) {
        if (skill.name.trim().length === 0 || parseInt(skill.damage) <= 0 || parseInt(skill.speed) <= 0) {
          return false
        }
        legendList.push(skill.name.trim())
        let tmpSeries = {
          name: skill.name,
          type: 'line',
          data: []
        }
        let damageList = []
        for (const x of xAxisData) {
          let damage = parseInt(skill.damage) - x >= 0 ? parseInt(skill.damage) - x : 1
          damageList.push(Math.floor(damage * 3600 * 100 / parseInt(skill.speed)))
        }
        tmpSeries.data = damageList
        seriesList.push(tmpSeries)
      }
      tmpData.series = seriesList
      tmpData.legend.data = legendList
      // this.damageData = tmpData
      // console.log(JSON.stringify(tmpData))

      this.showChart(tmpData)
      return true;
    },
    showChart(opt){
      if (this.myChart != null && this.myChart != '' && this.myChart != undefined) {
        this.myChart.dispose(); //销毁
      }
      const chartDom = document.getElementById('chartHolder');
      this.myChart = markRaw(echarts.init(chartDom));
      setTimeout(this.myChart.setOption(opt), 500);
    }
  }
}


//调用
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.topOption {
  display: flex;
  background: white;
  margin-bottom: 10px;
  padding: 10px 20px;
  justify-content: space-between;
  align-items: baseline;
}

.topOption .left_val {
  display: flex;
  justify-content: space-between;
}

.left_val .el-row {
  height: 32px;
  margin-top: 4px;
  margin-bottom: 4px;
}

.left_val .el-icon {
  align-items: center;
  display: inline-flex;
  color: #6a5acd;
  cursor: pointer;
  margin: 4px;
}

.topOption .right_option {
  width: 200px;
  flex-shrink: 0;
  display: flex
}

.m-0 {
  margin: 0rem;
}

.m-1 {
  margin: 0.25rem;
}

.m-2, [m~="\32 "] {
  margin: 0.5rem;
}

.m-4, [m~="\34 "] {
  margin: 1rem;
}

[m~="auto"] {
  margin: auto;
}

.mx-1 {
  margin-left: 0.25rem;
  margin-right: 0.25rem;
}

.mx-4 {
  margin-left: 1rem;
  margin-right: 1rem;
}

.my, .my-4 {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.my-2 {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

[m~="y-12"] {
  margin-top: 3rem;
  margin-bottom: 3rem;
}

.m-b-2px {
  margin-bottom: 2px;
}

.m-r-8px {
  margin-right: 8px;
}

.m-t-16px {
  margin-top: 16px;
}

.m-t-2px, .mt-2px {
  margin-top: 2px;
}

.mb-1, [mb-1=""] {
  margin-bottom: 0.25rem;
}

.mb-2, [m~="b-2"], [mb-2=""] {
  margin-bottom: 0.5rem;
}

.mb-3 {
  margin-bottom: 0.75rem;
}

.mb-4 {
  margin-bottom: 1rem;
}

.me {
  margin-inline-end: 1rem;
}

.ml-1 {
  margin-left: 0.25rem;
}

.ml-2 {
  margin-left: 0.5rem;
}

.ml-3 {
  margin-left: 0.75rem;
}

.ml-4 {
  margin-left: 1rem;
}

.mr-1 {
  margin-right: 0.25rem;
}

.mr-2 {
  margin-right: 0.5rem;
}

.mr-3 {
  margin-right: 0.75rem;
}

.mr-4 {
  margin-right: 1rem;
}

.mt-1 {
  margin-top: 0.25rem;
}

.mt-2, [m~="t-2"] {
  margin-top: 0.5rem;
}

.mt-3 {
  margin-top: 0.75rem;
}

.mt-32px {
  margin-top: 32px;
}

.mt-4, [m~="t-4"] {
  margin-top: 1rem;
}

.mt-8 {
  margin-top: 2rem;
}

.w-100\%, .w-full, [w-full=""] {
  width: 100%;
}

.w-100px {
  width: 100px;
}

.w-20, [w~="\32 0"] {
  width: 5rem;
}

.w-32px {
  width: 32px;
}

.w-35 {
  width: 8.75rem;
}

.w-50 {
  width: 12.5rem;
}

.w-8 {
  width: 2rem;
}

.w-89px {
  width: 89px;
}

.text-gray-600 {
  --un-text-opacity: 1;
  color: rgba(75, 85, 99, var(--un-text-opacity));
}

.inline-flex {
  display: inline-flex;
}

.items-center {
  align-items: center;
}
</style>