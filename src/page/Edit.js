import React, { useEffect, useState, useRef, useSelector } from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme";
import { RoundBtn, RectangleBtn } from "./Btn";
import { createPost, loadPost } from "./redux/modules/post";
import { useDispatch } from "react-redux";


const Edit = (props) => {
    console.log(props);
    const post_id = props.match.params.id;
    const post_list = useSelector((state) => state.post.post);
    const dispatch = useDispatch();
    console.log(post_list);
    const is_edit = post_id ? true : false;
    console.log(is_edit);
    const [contents, setContents] = React.useState(post_list.content);

    const [post, setEdit] = React.useState({
        postId: "",
        postCategory: "",
        postTitle: "",
        postImage: "",
        postAddress: "",
        postOrderTime: "",
        postContent: "",
        postDate: "",
        userNickname: "",
        authorId: ""
    });
    const changeContents = (e) => {
        setEdit({
            // ...post,
            content: e.target.value,
        });
    };
    useEffect(() => {
        console.log(post_id);
        const result = {
            userId: "",
            username: "",
            password: "",
            content: "",
            modifiedAt: "",
            imgUrl: "",
            userIcon: "",
            comment: "",
            date: "",
        };
        setEdit()
           

    }, []);

    return (
        <>
           <ThemeProvider theme={theme}>
      <Container>

        <Subtitle>
          N빵모임 만들기
        </Subtitle>



        <Label>카테고리 선택</Label>
        <Buttonbox>
          <Button
            id="1"
            value={"All"}
            className="categoryAll"
            onClick={categorySelect}
          >
            전체
          </Button>
          <Button
            id="2"
            value={"Chicken"}
            className="categoryChicken"
            onClick={(e) => setCategory(e.target.value)}
          >
            치킨
          </Button>
          <Button
            id="3"
            value={"Midnight"}
            className="categoryMidnight"
            onClick={(e) => setCategory(e.target.value)}
          >
            야식
          </Button>
          <Button
            id="4"
            value={"Chinese"}
            className="categoryChinese"
            onClick={(e) => setCategory(e.target.value)}
          >
            중식
          </Button>
          <Button
            id="5"
            value={"Korean"}
            className="categoryKorean"
            onClick={(e) => setCategory(e.target.value)}
          >
            한식
          </Button>
        </Buttonbox>





        <Label>
          제목
        </Label>
        <InputContainer
          type="text"
          placeholder="제목을 입력 해주세요!"
          onChange={(e) => {
            setPostTitle(e.target.value);
          }}
          value={postTitle}
        />

        <Line src={underLine} />



        <Label>사진</Label>

        <Imgveiw src={imagesrc} alt="" />
        <Filebox type="file" onChange={preveiw} />
        <Line src={underLine} />





        <Label>배달 받을 장소</Label>
        <InputContainer

          type="text"
          placeholder="장소를 입력해주세요!"
          onChange={(e) => {
            setAddres(e.target.value);
          }}
          value={addres}
        />
        <Line src={underLine} />




        <Label>주문 희망 시간</Label>
        <Timeinput type="time"
          onChange={(e) => {
            setOrderTime(e.target.value);
          }} value={orderTime} />
   



        <Label>
          N빵 내용
        </Label>
        <InputContainer
          type="text"
          placeholder="내용을 입력해주세요!"
          onChange={(e) => {
            setContent(e.target.value);
          }}
          value={content}></InputContainer>
        <Line src={underLine} />

        <SaveBtn className="saveBttn" onClick={addPost} text="저장하기">
          완료
        </SaveBtn>



      </Container >
      <Background />
    </ThemeProvider>
  )
};




const Container = styled.div`
display: flex;
    margin-top: 40px;
    padding: 0 30px;
    background-color: ${({ theme }) => theme.colors.BackgroundColor};
    flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      
  
    // theme.js에서 지정한 문자열을 이용 - @media screen and (min-width: 768px) {} 와 같은 뜻이 됩니다.
    // 짧게 쓰고 유지보수성을 높이기 위해 theme으로 등록했습니다.
    ${({ theme }) => theme.device.tablet} {
      margin-top: 20px;
      padding: 0 50px;
      background-color: ${({ theme }) => theme.colors.BackgroundColor};
      align-items: flex-start;

    }
  
    ${({ theme }) => theme.device.desktop} {
      max-width: 500px;
      margin: 20px auto 0 auto;
      background-color: ${({ theme }) => theme.colors.BackgroundColor};
      align-items: flex-start;
    }
  `;
const Subtitle = styled.h1`
  `
const Label = styled.label`

  font-size: ${({ theme }) => theme.fontSizes.sm};
  text-align: left;
  font-weight: 600;
  margin-bottom: 5px;
  `;
const InputContainer = styled.input`
  &[type="text"]{
    padding: 5px 0;
    border: none;
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: 500;
    transition: border-color 300ms ease-in-out;
    max-width: 250px;
    background: transparent;
  }
    
  `;




const Filebox = styled.input`
&[type="file"]{
display: inline-block;
  padding: .5em .75em;
  color: #999;
  font-size: inherit;
  line-height: normal;
  vertical-align: middle;
  background-color: #fdfdfd;
  cursor: pointer;
  border: none;
  background: transparent;
  border-bottom-color: #e2e2e2;
  border-radius: 15px;
  max-width: 250px;
  
}
`
const Imgveiw = styled.img`
  background-position: center 30%;
  background-size: cover;
  `;

const Button = styled.button`
  ${RectangleBtn};
`

const Buttonbox = styled.div`
  display: center;

`

const Timeinput = styled.input` 
 
 &[type="time"]{ 
    border: none;
  color: #2a2c2d;
  font-size: 14px;
  font-family: helvetica;
  width: 110px;
  height: 34px;
  border-radius: 15px;
  border: none;
  
  }
  
  
`



const SaveBtn = styled.button`
  ${RoundBtn};
  align-self: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
`;
const Background = styled.div`
  background-color: ${({ theme }) => theme.colors.BackgroundColor};
`;


const Line = styled.img`
  width: 100%;
  height: auto;
  margin: 0px 0px;
`;
// const Div = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: space-between;
//   margin-top: 20px;
// `;
export default Write;