<template>
  <div>
    <div id='loggedout-menubar-container'>
      <div class='float-left' style='padding-top: 5px;'>
          <span id='logo-text'>Share Learning Tools</span>
      </div>
      <div id='login-form'>
          <table>
            <tr>
              <td><input class='form-control' type='text' name='username' placeholder="Tên đăng nhập" v-model="username" /></td>
              <td><input class='form-control' type='password' name='password' placeholder="Mật khẩu" v-model="password"/></td>
              <td><button class='btn btn-primary' @click="login">Đăng nhập</button></td>
            </tr>
          </table>
      </div>
    </div>
    <div class='clear-both'></div>

    <div id='content'>
      <div class='float-left'>

      </div>
      <div id='create-account-form'>
        <h2>Tạo tài khoản mới</h2>
          <div class='form-group'>
            <input id='username' class='form-control' type='text' name='username' value='' placeholder='Tên người dùng' required/>
          </div>
          <div class='form-group'>
            <input id='loginname' class='form-control' type='text' name='loginname' value='' placeholder='Tên đăng nhập' required/>
          </div>
          <div class='form-group'>
            <input id='password' class='form-control' type='password' name='password' value='' placeholder='Mật khẩu mới' required />
          </div>
          <div class='form-group'>
            <input id='confirm_password' class='form-control' type='password' name='confirm_password' value='' placeholder='Xác nhận mật khẩu' required oninput='checkComfirmPassword(this)'/>
          </div>
          <button class='btn btn-primary' type='submit'>Tạo tài khoản</button>
      </div>
    </div>
    <div>{{$data | json}}</div>
  </div>
</template>

<script>
import UserServices from '../services/UserServices'
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async login () {
      await UserServices.login({
        username: this.username,
        password: this.password
      })
    }
  }
}
</script>

<style>
.sidebar-nav {
  margin-top: 20px;
  padding: 0;
  list-style: none;
}

.navbar-collapse {
  position: fixed
}

.collapse {
  position: fixed
}

body {
  background-color: #EDF0F5;
}
#loggedout-menubar-container {
  background-color: #3F5D9B;
  width: 100%;
  height: 90px;
  padding-top: 17px;
  padding-right: 130px;
  padding-left: 130px;
}

#logo-text {
  color: #ffffff;
  font-size: 30px;
  font-weight: bold;
}

#login-form{
  float:right;
}

#login-form table {
  border-collapse: separate;
  border-spacing: 10px;
}

.caption {
  text-align: center
}
#content {
  width: 80%;
  height: 400px;
  margin: auto;
}
#create-account-form {
  width: 44%;
  float: right;
  margin-top: 60px;
}

#news-feed {
  max-width: 50%;
  margin: auto
}
</style>
