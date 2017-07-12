<!-- 
* 其它业务
 -->
 <template>
    <div id="otherBusiness">
      <div class="alter-select pad-side-50">
        <div class="alter-chose"><span>业务类型</span></div>
        <div class="alter-wd bg-white">
          <p>此界面提供：信息更变、延期换证、期满换证、规定年龄换证、
          损坏换证、遗失换证、注销业务、降驾换证、转入换证的预约</p>
        </div>
      </div>
      <div class="alter-from pad-side-50">
        <common :orderPlaceData="appointPlaceData"
                @appointTaskClick="appointTask"></common>
      </div>
    </div>
  </div>
</template>
<script>
import common from './recoverDrive/child/common.vue'
export default {
  name: 'otherBusiness',
  data () {
    return {
      appointPlaceData: [   // 预约地点
        { 'str': '深圳市车管分所' },
        { 'str': '坪山车管分所' },
        { 'str': '宝安车管分所' },
        { 'str': '龙华车管分所' },
        { 'str': '罗湖管分所' },
        { 'str': '福田管分所' },
        { 'str': '盐田车管分所' },
        { 'str': '龙岗车管分所' },
        { 'str': '福田区委行政大厅' },
        { 'str': '宝安交警大队（福永中队）' },
        { 'str': '福田交警大队' },
        { 'str': '南山交警大队' },
        { 'str': '宝安交警大队（西乡中队）' },
        { 'str': '坪山交警大队' },
        { 'str': '龙华交警大队' },
        { 'str': '盐田交警大队' },
        { 'str': '光明交警大队' },
        { 'str': '龙岗交警大队' },
        { 'str': '罗湖交警大队' }
      ]
    }
  },
  components: {
    common
  },
  methods: {
    appointTask: function (params) {
      console.log('其它业务', params)
    }
  }
}
</script>
<style lang="less">
#otherBusiness {
  font-size: 26px;
  color: #000;
  overflow: hidden;
  .bg-white{
    background-color: #FFF;
  }
  .alter-select {
    height: 260px;;
    background-color: #fff;
    position: relative;
    padding-left: 230px;
    padding-top: 20px;
    .alter-chose{
      width: 180px;
      position: absolute;
      left: 50px;
      color: #666;
      line-height: 100px;
    }
    .alter-wd{
      padding:0 15px;
      line-height: 54px;
      border: 1px solid #e2e2e7;
      border-radius: 10px;
    }
  }
  .alter-from{
    background:#FFF;
    margin-top:10px;
  }
}
</style>
