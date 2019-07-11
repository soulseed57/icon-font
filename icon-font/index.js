Component({
    externalClasses: ['i-class'],

    properties: {
        isImg: {
            type: Boolean,
            value: false
        },
        prefix: {
            type: String,
            value: 'i-icon'
        },
        path: {
            type: String,
            value: ''
        },
        color: {
            type: String,
            value: 'black'
        },
        size: {
            type: Number,
            value: 24
        },
    }
});