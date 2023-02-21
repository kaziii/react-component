import { Modal as AntModal, ModalProps } from "antd";
import styled from "styled-components";


const Modal = (props: any) => {
    const { ...params } = props;
    return (
        <AntModal
            okText="确定"
            cancelText="取消"
            {...params}
        />
    )
}
const StyleAntModal = styled(Modal) <{ props: ModalProps }>`
.custom-search-modal-content{
    border-radius:4px;
}
ul,ol,li{
    list-style: none;
    padding: 0;
}
.custom-search-breadcrumb{
    ol{
        display:flex;
        flex-wrap:wrap;
    }

}
.custom-search-modal-header{
    padding:16px 14px;
    .custom-search-modal-title{
        text-align:left;
    }
}
.custom-search-modal-body{
    display:flex;
    padding:16px 12px 12px;
    .right{
        padding-left:12px;
        .content{
            width:100%;
        }
    }
    .left,.right{
        font-size:12px;    
        width:50%;
        text-align:left;
        overflow-y:scroll;
        max-height:420px;
        .search-input { 
            width:90%;
            .custom-search-input-affix-wrapper{
                height:40px;
            }
            .custom-search-btn{
                height:40px;
            }
        }
        .tagBox{
            font-size:14px;
            text-align: left;
            >a:nth-last-child(1){
                color:#000000A6;
            }
        }
        .checkChild {
            color: #3c55d8 ;
            width: 12% ;
            text-align: left ;
          }
        .has {
            color: #999;
          }
          .title {
            font-size: 14px;
            color: #000;
            margin-bottom: 10px;
          }
        .body-item {
            font-size: 12px;
            position: relative;
            color: #000;
            width: 100%;
            line-height: 12px;
            padding: 2px 0 10px 0;
            .icon-close {
              font-size: 16px;
              position: absolute;
              right: 12px;
              cursor: pointer;
            }
          }
    }
}
`
export default StyleAntModal;