<template>
	<view>
		<image :mode="mode" :src="imgSrc" v-bind='$attrs'></image>
	</view>
</template>

<script>
	import {
		url
	} from '@/utils/service.js'
	export default {
		name: "m-image",
		props: {
			src: {
				type: String,
				require: true
			},
			mode:{
				type:String,
				require:false,
				default:'aspectFill'
			}
		},
		data() {
			return {
				imgSrc: '',
				loading:true
			};
		},
		mounted() {
			this.setImage()
		},
		methods: {
			setImage() {
				let src = this.src.toString()
				if (src.substring(0, 2) == 'http') {
					this.imgSrc = src
				} else {
					this.imgSrc = url + src
				}
			}
		}
	}
</script>

<style lang="scss">

</style>
