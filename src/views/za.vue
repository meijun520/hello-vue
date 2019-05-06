<template>
  <div>
    <div class="page">
      <div class="dh">
        <div class="dh1">
          <div>
            导航条1
            <ul>
              <li>
                导航条2
                <div class="li3">
                  <div class="li31">
                    导航条3
                  </div>
                  <div class="li31">
                    导航条3
                  </div>
                </div>
              </li>
              <li> 导航条2</li>
              <li> 导航条2</li>
            </ul>
          </div>
        </div>
        <div class="dh1" />
        <div class="dh1">
          导航条1
        </div>
        <div class="dh1">
          导航条1
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Za'

}
</script>
<style  scoped>
*{
  padding:0;
  margin:0;
}
.page{
height:4043px;
width:100%;
background:green;
}
.dh{
  width: 180px;
  height: auto;
  background: #808080;
  position: fixed;
  top:50%;
}
.dh1{
  width: 180px;
  height:auto;
  border-bottom: 1px solid #ffffff;
  line-height: 20px;
  text-align: center

}
.dh1 li{
  width: 180px;
  height: auto;
  line-height: 20px;
  text-align: center;
  background: #ffffff;
  border-bottom: 1px solid black;
  display: none;
  position: relative;
}
.dh1:hover li{
  display: block
}
.li3{
  width: 180px;
  height: auto;
  position: absolute;
  left: 180px;
  top: 0;
  display: none
}
.li31{
  width: 180px;
  height: 20px;
  background: #ffffff;
  border-bottom: 1px solid black;

}
.dh1 li:hover .li3{
  display: block
}

</style>
