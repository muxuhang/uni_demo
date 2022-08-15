<template>
	<view class='presale'>
		<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
			:duration="duration">
			<swiper-item v-for="(item,index) in list" :key="index">
				<view class="swiper-item uni-bg-red">
					<m-image :src="item.image" style="height: 100rpx;width: 100rpx;"></m-image>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import {
		http
	} from '@/utils/service.js'
	import mimage from '@/components/m-image/m-image.vue'
	export default {
		components:{
			'm-image':mimage
		},
		data() {
			return {
				indicatorDots: false,
				autoplay: true,
				interval: 4000,
				duration: 1000,
				list: []
			}
		},
		created() {
			this.getPresaleList()
		},
		methods: {
			async getPresaleList() {
				const res = await http({
					api: '/assets/presale/',
					data: {
						limit: 100
					}
				})
				this.list = res.results
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>
