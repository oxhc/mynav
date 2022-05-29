<template>
  <div>
    <div>
      <div>
        <el-button @click="fresh" type="primary">刷新</el-button>
      </div>
      <div v-if="nav_history.length >= 2">
        {{ nav_history[nav_history.length-1].title }}
      </div>
    </div>


    <div class="container">
      <el-space spacer=" > ">
        <el-tag style="cursor:pointer;" v-for="(nav, index) in nav_history" :key="index" @click="add_switch_folder(nav)">
          {{ nav.title }}
        </el-tag>
      </el-space>
    </div>

    <div >
      <div v-loading="loading" class="container">
        <Dir_web class="item" v-for="(nav, index) in nav_data.filter(nav => nav.type === 'dir')" :key="index" :dir="nav" @click="switch_folder(nav)">
        </Dir_web>
        <div v-for="(b, index) in block" class="block_item" :key="index"></div>
      </div>

      <div v-loading="loading" class="container">
        <Nav_web class="nav_item" v-for="(nav, index) in nav_data.filter(nav => nav.type === 'a')" :key="index" :nav="nav">
        </Nav_web>
        <div v-for="(b, index) in block" class="nav_block_item" :key="index"></div>
      </div>
    </div>

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
      showInputPassDialog: false,
      nav_history: [],
      block: [1, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3],
      loading: false
    }
  },
  methods: {
    fresh() {
      this.nav_history = []
      localStorage.removeItem("nav_data")
      this.startup()
    },
    add_switch_folder(nav) {
      this.loading = true
      setTimeout(()=> {
        this.nav_data = nav.itemList
        this.nav_history = this.nav_history.slice(0, this.nav_history.findIndex((item) => item.title === nav.title)+1)
        this.loading = false
      }, 200)
    },
    switch_folder(nav) {
      this.loading = true
      setTimeout(()=> {
        this.nav_data = nav.itemList
        this.nav_history.push(nav)
        this.loading = false
      }, 200)
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
      fetch(window.location + "data.json.pub").then(res => res.text()).then(jd => {
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

        let nav = {
          title: '/',
          url: null,
          itemList: this.nav_data
        }
        this.nav_history.push(nav)

        localStorage.setItem("nav_data", JSON.stringify(this.nav_data))
        localStorage.setItem("pass", key)

        console.log(this.nav_data)

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
        let nav = {
          title: '/',
          url: null,
          itemList: this.nav_data
        }
        this.nav_history.push(nav)
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
  width: 80%;
  margin: 0 auto;
  justify-content: space-between;
  margin-bottom: 30px;
}
.item {
  width: 80px;
  height: 80px;
  margin: 5px;
  padding: 5px;
  overflow: hidden;
}
.nav_item {
  /*min-width: 300px;*/
  width: 320px;
  height: 30px;
  margin: 5px;
  padding: 5px;
  overflow: hidden;
  margin-bottom: 15px;
}

.block_item {
  width: 80px;
  margin: 0 5px;
  padding: 0 5px;
  overflow: hidden;
}

.nav_block_item {
  /*min-width: 300px;*/
  width: 320px;
  margin: 0 5px;
  padding: 0 5px;
  overflow: hidden;
}
</style>
