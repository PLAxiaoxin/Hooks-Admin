// import React, { FC, useMemo, useState } from "react";
// import { aesEncrypt } from "@/components/SliderVerify/utils/ase";
// import { resetSize } from "@/components/SliderVerify/utils/util";
// import { reqGet, reqCheck } from "@/components/SliderVerify/api";

// interface STYLE {
// 	width: string;
// 	height: string;
// }

// interface VerifyProps {
// 	captchaType: string;
// 	// type: string;
// 	mode: string | "fixed";

// 	vSpace: number | 5;
// 	explain: string | "向右滑动完成验证";
// 	imgSize: STYLE; // { width: "310px", height: "155px" }
// 	blockSize: STYLE; // { width: "50px"; height: "50px" }
// 	barSize: STYLE; // { width: "310px"; height: "40px" }
// }

// const Verify: FC<VerifyProps> = props => {
// 	const { vSpace, barSize = { width: "310px", height: "40px" } } = props;
// 	let data = useState({
// 		secretKey: "", //后端返回的加密秘钥 字段
// 		passFlag: "", //是否通过的标识
// 		backImgBase: "", //验证码背景图片
// 		blockBackImgBase: "", //验证滑块的背景图片
// 		backToken: "", //后端返回的唯一token值
// 		startMoveTime: "", //移动开始的时间
// 		endMovetime: "", //移动结束的时间
// 		tipsBackColor: "", //提示词的背景颜色
// 		tipWords: "",
// 		text: "",
// 		finishText: "",
// 		setSize: {
// 			imgHeight: 0,
// 			imgWidth: 0,
// 			barHeight: 0,
// 			barWidth: 0
// 		},
// 		top: 0,
// 		left: 0,
// 		moveBlockLeft: undefined,
// 		leftBarWidth: undefined,
// 		// 移动中样式
// 		moveBlockBackgroundColor: undefined,
// 		leftBarBorderColor: "#ddd",
// 		iconColor: undefined,
// 		iconClass: "icon-right",
// 		status: false, //鼠标状态
// 		isEnd: false, //是够验证完成
// 		showRefresh: true,
// 		transitionLeft: "",
// 		transitionWidth: "width .3s"
// 	});

// 	let barArea: Element | null = useMemo(() => document.querySelector(".verify-bar-area"), []);
// 	let resetSize: any = useMemo(() => resetSize, []);

// 	const init = () => {
// 		data.text = props.explain;
// 		getPictrue();
// 		// this.$nextTick(() => {
// 		const setSize = resetSize(this); //重新设置宽度高度
// 		for (const key in setSize) {
// 			this.$set(this.setSize, key, setSize[key]);
// 		}
// 		this.$parent.$emit("ready", this);
// 		// });

// 		window.removeEventListener("touchmove", function (e) {
// 			move(e);
// 		});
// 		window.removeEventListener("mousemove", function (e) {
// 			move(e);
// 		});

// 		//鼠标松开
// 		window.removeEventListener("touchend", function () {
// 			end();
// 		});
// 		window.removeEventListener("mouseup", function () {
// 			end();
// 		});

// 		window.addEventListener("touchmove", function (e) {
// 			move(e);
// 		});
// 		window.addEventListener("mousemove", function (e) {
// 			move(e);
// 		});

// 		//鼠标松开
// 		window.addEventListener("touchend", function () {
// 			end();
// 		});
// 		window.addEventListener("mouseup", function () {
// 			end();
// 		});
// 	};
// 	const refresh = () => {};
// 	const start = (e: Event) => {
// 		console.log(e);
// 	};
// 	const getPictrue = () => {};
// 	const move = (e: Event) => {
// 		console.log(e);
// 	};
// 	const end = () => {};

// 	return (
// 		<div style={{ position: "relative" }}>
// 			<div className="verify-img-out" style={{ height: data.setSize.imgHeight + vSpace + "px" }}>
// 				<div className="verify-img-panel" style={{ width: data.setSize.imgWidth, height: data.setSize.imgHeight }}>
// 					<img src={"data:image/png;base64," + data.backImgBase} style={{ width: "100%", height: "100%", display: "block" }} />
// 					<div className="verify-refresh" onClick={refresh}>
// 						<i className="iconfont icon-refresh"></i>
// 					</div>
// 					<div>
// 						<span className={data.passFlag ? "verify-tips suc-bg" : "verify-tips err-bg"}>{data.tipWords}</span>
// 					</div>
// 				</div>
// 			</div>
// 			{/* 公共部分 */}
// 			<div
// 				className="verify-bar-area"
// 				style={{ width: data.setSize.imgWidth, height: barSize.height, lineHeight: barSize.height }}
// 			>
// 				<span className="verify-msg">{data.text}</span>
// 				<div
// 					className="verify-left-bar"
// 					style={{
// 						width: data.leftBarWidth !== undefined ? data.leftBarWidth : barSize.height,
// 						height: barSize.height,
// 						borderColor: data.leftBarBorderColor,
// 						transition: data.transitionWidth
// 					}}
// 				>
// 					<span className="verify-msg" v-text="finishText"></span>
// 					<div
// 						className="verify-move-block"
// 						onTouchStart={start}
// 						onMouseDown={start}
// 						style={{
// 							width: barSize.height,
// 							height: barSize.height,
// 							backgroundColor: data.moveBlockBackgroundColor,
// 							left: data.moveBlockLeft,
// 							transition: data.transitionLeft
// 						}}
// 					>
// 						<i className={"verify-icon iconfont" + data.iconClass} style={{ color: data.iconColor }}></i>
// 						<div
// 							className="verify-sub-block"
// 							style={{
// 								width: Math.floor((data.setSize.imgWidth * 47) / 310) + "px",
// 								height: data.setSize.imgHeight,
// 								top: "-" + (data.setSize.imgHeight + vSpace) + "px",
// 								backgroundSize: data.setSize.imgWidth + " " + data.setSize.imgHeight
// 							}}
// 						>
// 							<img
// 								src={"data:image/png;base64," + data.blockBackImgBase}
// 								style={{ width: "100%", height: "100%", display: "block" }}
// 							/>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };
// export default Verify;
