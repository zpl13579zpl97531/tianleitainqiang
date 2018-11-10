<template>
    <div class="card page">
      <table>
        <tr>
        
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        
        </tr>
         <tr>
        
        <td>5</td>
        <td>6</td>
        <td>7</td>
        <td>8</td>
        
        </tr>
         <tr>
        
        <td>9</td>
        <td>10</td>
        <td>11</td>
        <td>12</td>
        
        </tr>
         <tr>
        
        <td>13</td>
        <td>14</td>
        <td>15</td>
        <td>16</td>
        
        </tr>
      </table>
   <router-link :to="{name:'home'}"> <h2>立即抢座</h2></router-link>
    </div>
</template>

<script>

export default {
    
   
}
</script>

<style scoped>

h2{
    margin-left:200px;
    margin-top:30px;
    font-size:50px;
    width:280px;
    height:100px;
    border-radius:100px;
    background:red;
    color:white;
    text-align:center;
    line-height:100px
}
table{
 width:100%;
    height:600px;
    margin-top:50px;

    border:2px solid red;
    text-align:center;
    vertical-align:middle;
    font-size:30px;
    font-weight:bolder
}
td{
    border:1px solid red
}

td:hover{
    background:red
}
</style>