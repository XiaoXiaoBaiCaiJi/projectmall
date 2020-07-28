<template>
  <div>
    <h1>分类</h1>
    <div class="catewrapper">
      <ul class="scroll">
        <li>列表滚动1</li>
        <li>列表滚动2</li>
        <li>列表滚动3</li>
        <li>列表滚动4</li>
        <li>列表滚动5</li>
        <li>列表滚动6</li>
        <li>列表滚动7</li>
        <li>列表滚动8</li>
        <li>列表滚动9</li>
        <li>列表滚动10</li>
        <li>列表滚动11</li>
        <li>列表滚动12</li>
        <li>列表滚动13</li>
        <li>列表滚动14</li>
        <li>列表滚动15</li>
        <li>列表滚动16</li>
        <li>列表滚动17</li>
        <li>列表滚动18</li>
        <li>列表滚动19</li>
        <li>列表滚动20</li>
        <li>列表滚动21</li>
        <li>列表滚动22</li>
        <li>列表滚动23</li>
        <li>列表滚动24</li>
        <li>列表滚动25</li>
        <li>列表滚动26</li>
        <li>列表滚动27</li>
        <li>列表滚动28</li>
        <li>列表滚动29</li>
        <li>列表滚动30</li>
        <li>列表滚动31</li>
        <li>列表滚动32</li>
        <li>列表滚动33</li>
        <li>列表滚动34</li>
        <li>列表滚动35</li>
        <li>列表滚动36</li>
        <li>列表滚动37</li>
        <li>列表滚动38</li>
        <li>列表滚动39</li>
        <li>列表滚动40</li>
        <li>列表滚动41</li>
        <li>列表滚动42</li>
        <li>列表滚动43</li>
        <li>列表滚动44</li>
        <li>列表滚动45</li>
        <li>列表滚动46</li>
        <li>列表滚动47</li>
        <li>列表滚动48</li>
        <li>列表滚动49</li>
        <li>列表滚动50</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from "better-scroll"

  export default {
    name: "Category",
    /*created() {
      /!*new BScroll('.wrapper',{  //document.querySelector('.scroll')
      })*!/
    },*/
    mounted() {
      this.scroll = new BScroll(document.querySelector('.catewrapper'),{
        probeType: 3,
        pullUpLoad: true
      })
      this.scroll.on('scroll',(position) => {
        // console.log(position);
      })
      this.scroll.on('pullingUp',() => {
        // console.log('上拉加载更多');
      })
    }
  }
</script>

<style scoped>
  .catewrapper {
    height: 150px;
    background-color: green;
    overflow: hidden;
    /*overflow-y: scroll;*/
  }

</style>
