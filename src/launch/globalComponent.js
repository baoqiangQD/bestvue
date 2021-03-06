/**
 * 统一管理全局组件
 */
import globalComponent from '../component/global.js'
import Api from 'api'

let components= {
  initComponents (vue) {
    globalComponent.forEach(v => {
      vue.component(v.name, v)
    })
    vue.prototype.isShowLeft = false
  }
}
export default components