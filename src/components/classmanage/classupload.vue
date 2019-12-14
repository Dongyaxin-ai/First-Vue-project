<template>
    <div class="class-manage-upload">
        <div class="c-m-u-con">
            <div>
                <router-link to="/bbb/successupload"><img class="c-m-u-ico" src="@/assets/image/upload-ico.png" alt="">
               </router-link>
            </div>
            <div class="upload-request">
                <p class="u-r-item">1.不得上传未经授权的他人作品以及色情，反动等违法视频</p>
                <p class="u-r-item">2.不得上传未经授权的他人作品以及色情，反动等违法视频</p>
                <p class="u-r-item">3.不得上传未经授权的他人作品以及色情，反动等违法视频</p>
                <p class="u-r-item">4.不得上传未经授权的他人作品以及色情，反动等违法视频</p>
                <p class="u-r-item">5.不得上传未经授权的他人作品以及色情，反动等违法视频</p>
                <p class="u-r-item">6.不得上传未经授权的他人作品以及色情，反动等违法视频</p>
                <p class="u-r-item">7.不得上传未经授权的他人作品以及色情，反动等违法视频</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less">
    .class-manage-upload {
        float: left;
        margin-top: 30px;
        width: 830px;
        height: 600px;
        background-color: #fff;
        .c-m-u-con {
            width: 500px;
            height: 500px;
            margin: 0 auto;
            text-align: center;
            margin-top: 60px;
            .c-m-u-ico {
                width: 130px;
                height: 120px;
            }
            .upload-request {
                margin-top: 30px;
                .u-r-item {
                font-size: 16px;
                text-align: center;
                color: #999;
                line-height: 35px;
            }
            }
            
        }
    }
</style>