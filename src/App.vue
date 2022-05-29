<template>
  <div>
    <div>
      <el-button @click="fresh" type="primary">刷新</el-button>
    </div>
    <div class="container">
      <Dir_web class="item" v-for="(nav, index) in nav_data.filter(nav => nav.type === 'dir')" :key="index" :dir="nav">
      </Dir_web>
      <Nav_web class="item" v-for="(nav, index) in nav_data.filter(nav => nav.type === 'a')" :key="index" :nav="nav">
      </Nav_web>
      <el-dialog fullscreen :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false" v-model="showInputPassDialog" title="请输入密码">
        <el-form>
          <el-form-item label="密码">
            <el-input type="password" v-model="pass"></el-input>
          </el-form-item>
        </el-form>
        <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="comfirm_pass">
          Confirm
        </el-button>
      </span>
        </template>
      </el-dialog>
    </div>
  </div>

</template>

<script>
import encryp_es6 from "@/utils/encryp_es6";
import md5 from 'js-md5'
import Dir_web from "@/components/Dir";
import Nav_web from "@/components/Nav";

export default {
  name: 'App',
  components: {
    Nav_web,
    Dir_web
  },
  data() {
    return {
      nav_data: [],
      pass: '',
      showInputPassDialog: false
    }
  },
  methods: {
    fresh() {
      localStorage.removeItem("nav_data")
      this.startup()
    },
    get_navData(success, err) {
      let nav_data = localStorage.getItem("nav_data")
      if(nav_data != null) {
        this.$message.success("已从localstorage中获取数据")
        success(JSON.parse(nav_data))
      } else {
        err()
      }
    },
    get_pass(success, err) {
      let pass = localStorage.getItem("pass")
      if(pass != null) {
        this.$message.success("已从localstorage中获取密码")
        success(pass)
      } else {
        err()
      }
    },
    get_data(key) {
      fetch("./data.json.pub").then(res => res.text()).then(jd => {
        let decrypted = ''
        try {
          decrypted = encryp_es6.decrypt(jd, md5(key), md5(md5(key)))
        } catch (err) {
          console.log(key)
          this.$message.error("密码错误, 请重试")
          return
        }
        this.showInputPassDialog = false
        let ob = JSON.parse(decrypted)
        this.nav_data = ob.itemList[0].itemList

        localStorage.setItem("nav_data", JSON.stringify(this.nav_data))
        localStorage.setItem("pass", key)

        this.$message.success("获取远程数据成功")

      })
    },
    input_pass() {
      this.showInputPassDialog = true
    },
    comfirm_pass() {
      this.get_data(this.pass)
    },
    startup() {
      this.get_navData((nav_data) => {
        this.nav_data = nav_data
      }, () => {
        this.get_pass((pass) => {
          this.get_data(pass)
        }, () => {
          this.input_pass()
        })
      })
    }
  },
  created() {
    this.startup()
  }
}
</script>

<style>
.container {
  display: flex;
  flex-wrap: wrap;
}
.item {
  width: 100px;
  height: 100px;
  margin: 5px;
  padding: 5px;
  overflow: hidden;
}
</style>
