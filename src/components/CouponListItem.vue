<template>
	<li class="coupon-list-item" style="width:90%;margin:10px auto;border-bottom:1px solid #ccc;border-bottom:1px solid #ccc;background-color: green">
		<div style="width:100%;height:210px">
			<div @click="useCoupon()" style="float:left;width:30%;background:block;background-color:blue;height:100%;color:white;width:60%">
				<p style="margin-top:0.4rem">{{coupon.value}}元优惠券</p>
				<p>点击使用</p>
			</div>
			<span style="width:30%;background-color:gray;height:100%;color:white;overflow:hidden;padding-top:10px">
				<p style="height:10px"></p>
				<p style="margin-top:10px">有效期</p>
				<p>{{coupon.create_time|datetime 'YYYY-MM-DD'}}</p>
				<p>{{coupon.overdue_time|datetime 'YYYY-MM-DD'}}</p>
			</span>
		</div>
	</li>
</template>
<script type="text/javascript">
module.exports = {
	replace: true,
	data:function(){
		return {
			"coupon":{}
		}
	},
	props: ['coupon'],
	methods:{
		useCoupon:function(){
			poem.saveObj('coupon',this.coupon);
			history.go(-1);
		},
	}
}

</script>

<style lang="stylus">
	@import "../main.styl"
	.coupon-list-item
		&	p
			margin:5px
			font-size:.4rem
			text-align:center
</style>