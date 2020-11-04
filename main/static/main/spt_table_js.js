new Vue({
    el:'#spt_input_element'
    data: {
        layer_number_v:0,
        gwt_level:0,
        answer='xd'
    },

    watch:{
    layer_number_v:function(layer_number_v){
    this.answer=layer_number_v
    }
    },

    methods:{

    },

    computed:{

    }

});