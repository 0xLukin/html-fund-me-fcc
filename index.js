import { ethers } from "./ethers-5.6.esm.min.js"

const connectButton = document.getElementById("connectButton")
const fundButton = document.getElementById("fundButton")
connectButton.onclick = connect
fundButton.onclick = fund

async function connect() {
  if (typeof window.ethereum !== "undefined") {
    await window.ethereum.request({ method: "eth_requestAccounts" })
    console.log("连接上了")
    document.getElementById("connectButton").innerHTML = "已连接"
  } else {
    console.log("没有安装小狐狸钱包")
    document.getElementById("connectButton").innerHTML = "请安装小狐狸钱包"
  }
}

async function fund(ethAmount) {
  console.log(`Funding with ${ethAmount}...`)
  if (typeof window.ethereum !== "undefined") {
  }
}
