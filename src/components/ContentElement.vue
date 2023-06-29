<template>
  <UseManual/>
<!--  左侧装备显示区-->
  <div class="skeleton-wrapper">
    <div class="skeleton-box">
      <img src="../assets/body.png" width="482" height="500"/>

      <!--    武器-->
      <div class="element-box element-box-wuqi">
        <!--      状态展示-->
        <div class="equipment_cover equipment_cover_off" v-if="!equipmentOptions[0].a">
        </div>
        <div class="equipment_cover equipment_cover_on" v-if="equipmentOptions[0].a">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </div>
        <!--      五行选择-->
        <div class="element-select-box">
          <div class="element-select element-select-margin-right-bottom">
            <el-tooltip
              class="box-item"
              effect="dark"
              placement="right-start"
          >
              <template #content>
                选择【<span style='color:#ffd700'>武器</span>】对应【<span style='color:#00ffff'>五行</span>】属性
                <br>↑【<span style='color:#ffd700'>牌王</span>】【<span style='color:#00ffff'>{{previousElement(equipmentOptions[0].e)}}</span>】
                <br>↓【<span style='color:#ffd700'>左戒指</span>】【<span style='color:#00ffff'>{{nextElement(equipmentOptions[0].e)}}</span>】
              </template>
            <el-select v-model="equipmentOptions[0].e" class="m-2" placeholder="五行" @change="handleChange" size="small">
              <el-option
                  v-for="item in elementsOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
              />
            </el-select>
          </el-tooltip>

        </div>
        </div>
      </div>

      <!--    左戒指-->
      <div class="element-box element-box-zuojiezhi">
        <!--      状态展示-->
        <div class="equipment_cover equipment_cover_off" v-if="!equipmentOptions[1].a">
        </div>
        <div class="equipment_cover equipment_cover_on" v-if="equipmentOptions[1].a">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </div>
        <!--      五行选择-->
        <div class="element-select-box">
          <div class="element-select element-select-margin-right-bottom">
            <el-tooltip
                class="box-item"
                effect="dark"
                placement="right-start"
            >
              <template #content>
                选择【<span style='color:#ffd700'>左戒指</span>】对应【<span style='color:#00ffff'>五行</span>】属性
                <br>↑【<span style='color:#ffd700'>武器</span>】【<span style='color:#00ffff'>{{previousElement(equipmentOptions[1].e)}}</span>】
                <br>↓【<span style='color:#ffd700'>项链</span>】【<span style='color:#00ffff'>{{nextElement(equipmentOptions[1].e)}}</span>】
              </template>
              <el-select v-model="equipmentOptions[1].e" class="m-2" placeholder="五行" @change="handleChange" size="small">
                <el-option
                    v-for="item in elementsOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
              </el-select>
            </el-tooltip>

          </div>
        </div>
      </div>

      <!--    项链-->
      <div class="element-box element-box-xianglian">
        <!--      状态展示-->
        <div class="equipment_cover equipment_cover_off" v-if="!equipmentOptions[2].a">
        </div>
        <div class="equipment_cover equipment_cover_on" v-if="equipmentOptions[2].a">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </div>
        <!--      五行选择-->
        <div class="element-select-box">
          <div class="element-select element-select-margin-right-bottom">
            <el-tooltip
                class="box-item"
                effect="dark"
                placement="right-start"
            >
              <template #content>
                选择【<span style='color:#ffd700'>项链</span>】对应【<span style='color:#00ffff'>五行</span>】属性
                <br>↑【<span style='color:#ffd700'>左戒指</span>】【<span style='color:#00ffff'>{{previousElement(equipmentOptions[2].e)}}</span>】
                <br>↓【<span style='color:#ffd700'>玉佩</span>】【<span style='color:#00ffff'>{{nextElement(equipmentOptions[2].e)}}</span>】
              </template>
              <el-select v-model="equipmentOptions[2].e" class="m-2" placeholder="五行" @change="handleChange" size="small">
                <el-option
                    v-for="item in elementsOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
              </el-select>
            </el-tooltip>

          </div>
        </div>
      </div>

      <!--    玉佩-->
      <div class="element-box element-box-yupei">
        <!--      状态展示-->
        <div class="equipment_cover equipment_cover_off" v-if="!equipmentOptions[3].a">
        </div>
        <div class="equipment_cover equipment_cover_on" v-if="equipmentOptions[3].a">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </div>
        <!--      五行选择-->
        <div class="element-select-box">
          <div class="element-select element-select-margin-right-top">
            <el-tooltip
                class="box-item"
                effect="dark"
                placement="right-start"
            >
              <template #content>
                选择【<span style='color:#ffd700'>玉佩</span>】对应【<span style='color:#00ffff'>五行</span>】属性
                <br>↑【<span style='color:#ffd700'>项链</span>】【<span style='color:#00ffff'>{{previousElement(equipmentOptions[3].e)}}</span>】
                <br>↓【<span style='color:#ffd700'>右戒指</span>】【<span style='color:#00ffff'>{{nextElement(equipmentOptions[3].e)}}</span>】
              </template>
              <el-select v-model="equipmentOptions[3].e" class="m-2" placeholder="五行" @change="handleChange" size="small">
                <el-option
                    v-for="item in elementsOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
              </el-select>
            </el-tooltip>

          </div>
        </div>
      </div>

      <!--    右戒指-->
      <div class="element-box element-box-youjiezhi">
        <!--      状态展示-->
        <div class="equipment_cover equipment_cover_off" v-if="!equipmentOptions[4].a">
        </div>
        <div class="equipment_cover equipment_cover_on" v-if="equipmentOptions[4].a">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </div>
        <!--      五行选择-->
        <div class="element-select-box">
          <div class="element-select element-select-margin-left-bottom">
            <el-tooltip
                class="box-item"
                effect="dark"
                placement="right-start"
            >
              <template #content>
                选择【<span style='color:#ffd700'>右戒指</span>】对应【<span style='color:#00ffff'>五行</span>】属性
                <br>↑【<span style='color:#ffd700'>玉佩</span>】【<span style='color:#00ffff'>{{previousElement(equipmentOptions[4].e)}}</span>】
                <br>↓【<span style='color:#ffd700'>令牌</span>】【<span style='color:#00ffff'>{{nextElement(equipmentOptions[4].e)}}</span>】
              </template>
              <el-select v-model="equipmentOptions[4].e" class="m-2" placeholder="五行" @change="handleChange" size="small">
                <el-option
                    v-for="item in elementsOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
              </el-select>
            </el-tooltip>

          </div>
        </div>
      </div>

      <!--    令牌-->
      <div class="element-box element-box-lingpai">
        <!--      状态展示-->
        <div class="equipment_cover equipment_cover_off" v-if="!equipmentOptions[5].a">
        </div>
        <div class="equipment_cover equipment_cover_on" v-if="equipmentOptions[5].a">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </div>
        <!--      五行选择-->
        <div class="element-select-box">
          <div class="element-select element-select-margin-left-bottom">
            <el-tooltip
                class="box-item"
                effect="dark"
                placement="right-start"
            >
              <template #content>
                选择【<span style='color:#ffd700'>令牌</span>】对应【<span style='color:#00ffff'>五行</span>】属性
                <br>↑【<span style='color:#ffd700'>右戒指</span>】【<span style='color:#00ffff'>{{previousElement(equipmentOptions[5].e)}}</span>】
                <br>↓【<span style='color:#ffd700'>衣服</span>】【<span style='color:#00ffff'>{{nextElement(equipmentOptions[5].e)}}</span>】
              </template>
              <el-select v-model="equipmentOptions[5].e" class="m-2" placeholder="五行" @change="handleChange" size="small">
                <el-option
                    v-for="item in elementsOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
              </el-select>
            </el-tooltip>

          </div>
        </div>
      </div>

      <!--    衣服-->
      <div class="element-box element-box-yifu">
        <!--      状态展示-->
        <div class="equipment_cover equipment_cover_off" v-if="!equipmentOptions[6].a">
        </div>
        <div class="equipment_cover equipment_cover_on" v-if="equipmentOptions[6].a">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </div>
        <!--      五行选择-->
        <div class="element-select-box">
          <div class="element-select element-select-margin-left-bottom">
            <el-tooltip
                class="box-item"
                effect="dark"
                placement="right-start"
            >
              <template #content>
                选择【<span style='color:#ffd700'>衣服</span>】对应【<span style='color:#00ffff'>五行</span>】属性
                <br>↑【<span style='color:#ffd700'>令牌</span>】【<span style='color:#00ffff'>{{previousElement(equipmentOptions[6].e)}}</span>】
                <br>↓【<span style='color:#ffd700'>护腕</span>】【<span style='color:#00ffff'>{{nextElement(equipmentOptions[6].e)}}</span>】
              </template>
              <el-select v-model="equipmentOptions[6].e" class="m-2" placeholder="五行" @change="handleChange" size="small">
                <el-option
                    v-for="item in elementsOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
              </el-select>
            </el-tooltip>

          </div>
        </div>
      </div>

      <!--    护腕-->
      <div class="element-box element-box-huwan">
        <!--      状态展示-->
        <div class="equipment_cover equipment_cover_off" v-if="!equipmentOptions[7].a">
        </div>
        <div class="equipment_cover equipment_cover_on" v-if="equipmentOptions[7].a">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </div>
        <!--      五行选择-->
        <div class="element-select-box">
          <div class="element-select element-select-margin-right-top">
            <el-tooltip
                class="box-item"
                effect="dark"
                placement="right-start"
            >
              <template #content>
                选择【<span style='color:#ffd700'>护腕</span>】对应【<span style='color:#00ffff'>五行</span>】属性
                <br>↑【<span style='color:#ffd700'>衣服</span>】【<span style='color:#00ffff'>{{previousElement(equipmentOptions[7].e)}}</span>】
                <br>↓【<span style='color:#ffd700'>鞋子</span>】【<span style='color:#00ffff'>{{nextElement(equipmentOptions[7].e)}}</span>】
              </template>
              <el-select v-model="equipmentOptions[7].e" class="m-2" placeholder="五行" @change="handleChange" size="small">
                <el-option
                    v-for="item in elementsOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
              </el-select>
            </el-tooltip>

          </div>
        </div>
      </div>

      <!--    鞋子-->
      <div class="element-box element-box-xiezi">
        <!--      状态展示-->
        <div class="equipment_cover equipment_cover_off" v-if="!equipmentOptions[8].a">
        </div>
        <div class="equipment_cover equipment_cover_on" v-if="equipmentOptions[8].a">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </div>
        <!--      五行选择-->
        <div class="element-select-box">
          <div class="element-select element-select-margin-left-top">
            <el-tooltip
                class="box-item"
                effect="dark"
                placement="right-start"
            >
              <template #content>
                选择【<span style='color:#ffd700'>鞋子</span>】对应【<span style='color:#00ffff'>五行</span>】属性
                <br>↑【<span style='color:#ffd700'>护腕</span>】【<span style='color:#00ffff'>{{previousElement(equipmentOptions[8].e)}}</span>】
                <br>↓【<span style='color:#ffd700'>头</span>】【<span style='color:#00ffff'>{{nextElement(equipmentOptions[8].e)}}</span>】
              </template>
              <el-select v-model="equipmentOptions[8].e" class="m-2" placeholder="五行" @change="handleChange" size="small">
                <el-option
                    v-for="item in elementsOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
              </el-select>
            </el-tooltip>

          </div>
        </div>
      </div>

      <!--    头-->
      <div class="element-box element-box-tou">
        <!--      状态展示-->
        <div class="equipment_cover equipment_cover_off" v-if="!equipmentOptions[9].a">
        </div>
        <div class="equipment_cover equipment_cover_on" v-if="equipmentOptions[9].a">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </div>
        <!--      五行选择-->
        <div class="element-select-box">
          <div class="element-select element-select-margin-right-bottom">
            <el-tooltip
                class="box-item"
                effect="dark"
                placement="right-start"
            >
              <template #content>
                选择【<span style='color:#ffd700'>头</span>】对应【<span style='color:#00ffff'>五行</span>】属性
                <br>↑【<span style='color:#ffd700'>鞋子</span>】【<span style='color:#00ffff'>{{previousElement(equipmentOptions[9].e)}}</span>】
                <br>↓【<span style='color:#ffd700'>腰带</span>】【<span style='color:#00ffff'>{{nextElement(equipmentOptions[9].e)}}</span>】
              </template>
              <el-select v-model="equipmentOptions[9].e" class="m-2" placeholder="五行" @change="handleChange" size="small">
                <el-option
                    v-for="item in elementsOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
              </el-select>
            </el-tooltip>

          </div>
        </div>
      </div>

      <!--    腰带-->
      <div class="element-box element-box-yaodai">
        <!--      状态展示-->
        <div class="equipment_cover equipment_cover_off" v-if="!equipmentOptions[10].a">
        </div>
        <div class="equipment_cover equipment_cover_on" v-if="equipmentOptions[10].a">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </div>
        <!--      五行选择-->
        <div class="element-select-box">
          <div class="element-select element-select-margin-left-top">
            <el-tooltip
                class="box-item"
                effect="dark"
                placement="right-start"
            >
              <template #content>
                选择【<span style='color:#ffd700'>腰带</span>】对应【<span style='color:#00ffff'>五行</span>】属性
                <br>↑【<span style='color:#ffd700'>头</span>】【<span style='color:#00ffff'>{{previousElement(equipmentOptions[10].e)}}</span>】
                <br>↓【<span style='color:#ffd700'>牌王</span>】【<span style='color:#00ffff'>{{nextElement(equipmentOptions[10].e)}}</span>】
              </template>
              <el-select v-model="equipmentOptions[10].e" class="m-2" placeholder="五行" @change="handleChange" size="small">
                <el-option
                    v-for="item in elementsOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
              </el-select>
            </el-tooltip>

          </div>
        </div>
      </div>

      <!--    牌王-->
      <div class="element-box element-box-paiwang">
        <!--      状态展示-->
        <div class="equipment_cover equipment_cover_off" v-if="!equipmentOptions[11].a">
        </div>
        <div class="equipment_cover equipment_cover_on" v-if="equipmentOptions[11].a">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </div>
        <!--      五行选择-->
        <div class="element-select-box">
          <div class="element-select element-select-margin-left-bottom">
            <el-tooltip
                class="box-item"
                effect="dark"
                placement="right-start"
            >
              <template #content>
                选择【<span style='color:#ffd700'>牌王</span>】对应【<span style='color:#00ffff'>五行</span>】属性
                <br>↑【<span style='color:#ffd700'>腰带</span>】【<span style='color:#00ffff'>{{previousElement(equipmentOptions[11].e)}}</span>】
                <br>↓【<span style='color:#ffd700'>武器</span>】【<span style='color:#00ffff'>{{nextElement(equipmentOptions[11].e)}}</span>】
              </template>
              <el-select v-model="equipmentOptions[11].e" class="m-2" placeholder="五行" @change="handleChange" size="small">
                <el-option
                    v-for="item in elementsOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
              </el-select>
            </el-tooltip>

          </div>
        </div>
      </div>

    </div>
  </div>

<!--  右侧控制显示区-->
  <div class="control-wrapper">
    <el-button type="warning" @click="reset">&lt;-五行重置</el-button>
    <fieldset>
      <legend>五行选项</legend>
      起始装备：<el-select v-model="startEquipment" class="m-2" placeholder="推荐" @change="handleChange" clearable="true">
      <el-option
          v-for="(e,index) in equipmentOptions"
          :key="e.k"
          :label="e.k"
          :value="index"
      />
    </el-select>
      <br/><br/>起始五行：<el-select v-model="startElement" class="m-2" placeholder="推荐" @change="handleChange" clearable="true">
      <el-option
          v-for="item in elementsOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
      />
    </el-select>
    </fieldset>
    <div class="show-result">
      <p v-if="currrentActivatityNum == 11 ">当前全身激活部位<span class="red">11</span>个，恭喜你已<span class="success">全部成功激活</span>。</p>
      <p v-if="currrentActivatityNum < 11">当前全身激活部位<span class="red">{{ currrentActivatityNum }}</span>个，还有<span class="red">{{ 11-currrentActivatityNum }}</span>个部位可激活</p>
      <p v-if="modifyList.length>0">根据上面选项激活最优方案如下(刷新五行部位<span class="red">{{modifyList.length}}</span>件)：</p>
      <ul>
        <template v-for="modify in modifyList" :key="modify.e">
          <li>
            <span class="weapon-color" >{{ modify.k }}</span>:<span class="element-color">{{ getElementName(modify.o) }}</span>-&gt;<span class="red">{{ getElementName(modify.n) }}</span><br>
          </li>
        </template>
      </ul>
      <p v-if="modifyList.length>0"><el-button type="primary" @click="useSuggestion">&lt;-采纳方案</el-button></p>
    </div>
  </div>
</template>

<script>
import UseManual from "@/components/UseManual";

export default {
  data(){return {
    elementsOptions : [
      {
        value: 0,
        label: '火',
      },
      {
        value: 1,
        label: '雷',
      },
      {
        value: 2,
        label: '风',
      },
      {
        value: 3,
        label: '电',
      },
      {
        value: 4,
        label: '雨',
      },
    ],
    // 武器→左戒指→项链→玉佩→右戒指→ 令牌→衣服→护腕→鞋子→头 →腰带→牌王→
    equipmentOptions:[
      {k:'武器',e:'',a:false},
      {k:'左戒指',e:'',a:false},
      {k:'项链',e:'',a:false},
      {k:'玉佩',e:'',a:false},
      {k:'右戒指',e:'',a:false},
      {k:'令牌',e:'',a:false},
      {k:'衣服',e:'',a:false},
      {k:'护腕',e:'',a:false},
      {k:'鞋子',e:'',a:false},
      {k:'头',e:'',a:false},
      {k:'腰带',e:'',a:false},
      {k:'牌王',e:'',a:false},
    ],
    modifyList:[],//{k:"武器",o:"风",n:"火"}
    currrentActivatityNum:0,
    startEquipment:'',
    startElement:'',
  }},
  components: {
    UseManual,
  },
  created(){
    this.showLog(this.$route.path, "页面开始创建中")
  },
  mounted(){
    this.showLog(this.$route.path, "Mounted")
  },
  methods: {
    handleChange(v) {
      this.checkElements(v)
      this.getSuggestion()
    },
    reset(){
      for (let j = 0;j<12;j++){
        let cPart = this.equipmentOptions[j]
        cPart.e = ''
        cPart.a = false
      }
      this.checkElements()
      this.getSuggestion()
    },
    checkElements(){
      // 判断当前激活状态
      // let tmpModifyList = []
      console.log(this.equipmentOptions)
      this.currrentActivatityNum = 0
      for (let j = 0;j<12;j++){
        let cPart = this.equipmentOptions[j]
        let nPart = this.equipmentOptions[(j+1)%12]
        if (cPart.e !== "" && nPart.e !== "" && (cPart.e + 1)%5 == nPart.e){
          cPart.a = true
          this.currrentActivatityNum++
        }else{
          cPart.a = false
        }
      }
      // ElMessage(v)

    },
    getSuggestion(){
      // 计算最优激活方案
      this.modifyList = []
      console.log("起始部位:",this.startEquipment)
      console.log("起始元素:",this.startElement)
      if (this.startEquipment === "") {
        if (this.startElement === "") {
          for(let k = 0;k<12;k++){
            for(let j = 0;j<5;j++){
              let resultList = this.runCheck(k,j)
              if (resultList.length == 0 ){
                return
              }
            }
          }
        }else{
          for(let k = 0;k<12;k++){
            let resultList = this.runCheck(k,this.startElement)
            if (resultList.length == 0 ){
              return
            }
          }
        }
      }else{
        if (this.startElement === "") {
          for(let j = 0;j<5;j++){
            let resultList = this.runCheck(this.startEquipment,j)
            if (resultList.length == 0 ){
              return
            }
          }
        }else{
          this.runCheck(this.startEquipment,this.startElement)
        }
      }
    },
    runCheck(k,i){
      let tmpModifyList = []
      for (let j = 0;j<12;j++){
        let cPart = this.equipmentOptions[(j + k)%12]
        if (cPart.e !== (i + j)%5){
          tmpModifyList.push({k:cPart.k,o:cPart.e,n:(i + j)%5,i:(j + k)%12});
        }
      }
      if (tmpModifyList.length == 0){
        this.modifyList = []
        return []
      }
      if (this.modifyList.length == 0 || tmpModifyList.length <= this.modifyList.length){
        this.modifyList = tmpModifyList
      }
      return tmpModifyList
    },
    getElementName(i){
      if (i === "") {return "";}
      return this.elementsOptions[i].label
    },
    previousElement(i){
      if (i === ""){
          return "";
      }else{
        return this.elementsOptions[(i+4)%5].label
      }
    },
    nextElement(i){
      if (i === ""){
        return "";
      }else{
        return this.elementsOptions[(i+1)%5].label
      }
    },
    useSuggestion(){
      console.log(this.modifyList)
      for (let j = 0;j<this.modifyList.length;j++){
        this.equipmentOptions[this.modifyList[j].i].e = this.modifyList[j].n
      }
      this.checkElements()
      this.getSuggestion()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.weapon-color{
  color:#eb8e55;
}
.element-color{
  color:#6a5acd;
}
/*左侧装备显示区*/
.skeleton-wrapper {
  width: 600px;
  float: left;
}
.skeleton-box{
  width: 482px;
  height: 500px;
  text-align: center;
  position: relative;
  margin: 0 auto;
}



.element-box{
  position: absolute;
}

/* 武器→左戒指→项链→玉佩→右戒指→ 令牌→衣服→护腕→鞋子→头 →腰带→牌王→*/
.element-box-wuqi{
  top:268px;
}
.element-box-zuojiezhi{
  top:141px;
}
.element-box-xianglian{
  left:132px;
  top: 0;
}
.element-box-yupei{
  top:398px;
}
.element-box-youjiezhi{
  left:382px;
  top:141px;
}
.element-box-lingpai{
  left:382px;
  top: 0;
}
.element-box-yifu{
  left:382px;
  top:268px;
}
.element-box-huwan{
  left:132px;
  top:398px;
}
.element-box-xiezi{
  left:382px;
  top:398px;
}
.element-box-tou{
  top: 0;
}
.element-box-yaodai{
  left:259px;
  top:398px;
}
.element-box-paiwang{
  left:259px;
  top: 0;
}


.element-select-box{
  position: relative;
  width: 100px;
  height: 100px;
  margin:0;
}
.element-select{
  position: absolute;
  width: 48px;
}
/*五行选择框方向*/
.element-select-margin-right-bottom{
  right:0;
  bottom:0;
  margin-right: 3px;
  margin-bottom: 3px;
}
.element-select-margin-left-bottom{
  left:0;
  bottom:0;
  margin-left: 3px;
  margin-bottom: 3px;
}
.element-select-margin-right-top{
  right:0;
  top:0;
  margin-right: 3px;
  margin-top: 3px;
}
.element-select-margin-left-top{
  left:0;
  top:0;
  margin-left: 3px;
  margin-top: 3px;
}

.element-select :deep(.el-input__wrapper){
  background: rgba(188,188,188,0);
}
.element-select :deep(.el-input__inner){
  color:#00ffff;
  font-weight: 700;
}
.element-select :deep(.el-input__suffix){
  display: none;
}
.equipment_cover{
  position: absolute;
  width: 100px;
  height: 100px;
  content: "";
  opacity:1.0;
  /* 超出隐藏需要加上 */
  overflow: hidden;
  top:0px;
  left: 0px;
}
.equipment_cover_off{
  background:rgba(0,0,0,0.5);
}
.equipment_cover_on{
  background:none;
}




/*右侧控制显示区*/
.control-wrapper{
  float: left;
  text-align: left;
}
.show-result{
  margin-top: 12px;
}

/*装备激活后动画特效*/
.line {
  /* 结合外层元素的相对定位 */
  position: absolute;
}

.line:nth-child(1) {
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  /* 加上渐变效果，方可形成拖尾效果 */
  background: linear-gradient(90deg, transparent, #f5deb3);
  animation: animate1 2s linear infinite;
}

/* 分别控制其上下左右的定位距离，从而形成线条跟随效果 */
@keyframes animate1 {
  0% {
    left: -100%;
  }

  50%,
  100% {
    left: 100%;
  }
}

.line:nth-child(2) {
  top: -100%;
  right: 0;
  width: 3px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #f5deb3);
  animation: animate2 2s linear infinite;
  /* 注意要加上延时触发动画效果，这样线条才会依次触发 */
  animation-delay: 0.5s;
}

@keyframes animate2 {
  0% {
    top: -100%;
  }

  50%,
  100% {
    top: 100%;
  }
}

.line:nth-child(3) {
  bottom: 0;
  right: 0;
  width: 100%;
  background: linear-gradient(270deg, transparent, #f5deb3);
  animation: animate3 2s linear infinite;
  animation-delay: 1s;
}

@keyframes animate3 {
  0% {
    right: -100%;
    height: 3px;
  }

  50%,
  100% {
    height: 2px;
    right: 100%;
  }
}

.line:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 3px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #f5deb3);
  animation: animate4 2s linear infinite;
  animation-delay: 1.5s;
}

@keyframes animate4 {
  0% {
    bottom: -100%;
  }

  50%,
  100% {
    bottom: 100%;
  }
}

</style>