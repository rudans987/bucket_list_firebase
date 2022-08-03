import React from "react";
import {useParams} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {deleteBucket, updateBucket,  updateBucketFB, deleteBucketFB} from "./redux/modules/bucket";
import {useNavigate} from "react-router-dom";
import Button from '@mui/material/Button';
import SvgIcon from '@mui/material/SvgIcon';


function Detail(props){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {index} = useParams();
    console.log(index);
   
   
    const bucket_list = useSelector((state)=> state.bucket.list);
    console.log(bucket_list);

    function HomeIcon(props) {
        return (
          <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </SvgIcon>
        );
      }

    return (
        <>
       <h1 >{bucket_list[index]? bucket_list[index].text:""}</h1>
       <HomeIcon color="primary"
                 style={{marginRight: 10,
                                   
                }} 
                  onClick={()=>{
                    navigate("/");}}      
         />
        <Button variant="outlined"
                style={{marginRight: 10}}   
                onClick={() => {
            // dispatch(updateBucket(bucket_index));
            dispatch(updateBucketFB(bucket_list[index].id));
        }}>완료하기</Button>
        <Button variant="outlined" 
                color="error"
                style={{marginRight: 10}} 
                onClick={() => {
            // dispatch(deleteBucket(bucket_index));
            dispatch(deleteBucketFB(bucket_list[index].id));
            navigate(-1);
        }}>삭제하기</Button>
        
    
        </>
    )
}

export default Detail;