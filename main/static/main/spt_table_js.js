new Vue({
  delimiters: ['[[', ']]'],
  el: '#spt_input_element',
  data: {
    answer: 'OK',      // answer is just to check whether code is working
    layer_number: '0', // getting value from Number of Layers input box
    gwt:'0',           // getting value from Ground Water Table input box
    rows:[],           // represent each row in spt_table with an array
    layer_counter:'0',
  },
  methods: {

    // Change Row is for dynamically changing row number of spt_table in accordance to Number of Layers
    changeRow: function(count){
        //takes initial row data
        var numRows = this.rows.length;

        //adding rows and deleting rows
        if (count>numRows){
           for(var i=1; i <= (count-numRows); i++) {
                this.rows.push({});
        }} else if (count<numRows){
           for(var i=1; i <= (numRows-count); i++) {
                this.rows.pop();
        }} else {
           return;
        }
        }


    },



})