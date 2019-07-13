Component({

  /**
   * 外部样式
   */
  externalClasses: ['i-class', 'class'],

  /**
   * 组件的属性列表
   */
  properties: {
    prefix: {
      type: String,
      value: 'i-icon'
    },
    type: {
      type: String,
      value: ''
    },
    path: {
      type: String,
      value: ''
    },
    color: {
      type: String,
      value: 'white'
    },
    size: {
      type: Number,
      value: 28
    },
  },

});