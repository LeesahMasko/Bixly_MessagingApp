import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import axios from "axios";

function ComposeMessageForm(props) {
  const { token } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();



  const onSubmit = (data) => {
    console.log(data);

    axios({
      method: "post",
      url: "https://messaging-test.bixly.com/messages/",
      data,
      headers: {
        authorization: "Token " + token,
            "content-type": "application/json",
      },
    })
      .then((res) => console.log(res))
      .catch(function (error) {

      })

    console.log(errors);
  };

  return (
    <Wrapper>
      <WrapperComposeMessage>
        <form onSubmit={handleSubmit(onSubmit)}>

          <input required
            className="input"
            type="text"
            placeholder="To whom? (required)"
            {...register("receiver", { required: true })}
          />

          <textarea required
            className="textareaSub"
            type="text"
            placeholder="Subject? (required)"
            {...register("title", { required: true, maxLength: 250 })}
          />
          <textarea required
            className="textareaBody"
            type="text"
            placeholder="What's your message? (required)"
            {...register("body", { required: true, maxLength: 1000 })}
          />

          <button type="submit">Send Message</button>
        </form>
      </WrapperComposeMessage>
    </Wrapper>
  );
}

export default ComposeMessageForm;

const Wrapper = styled.div``;
const WrapperComposeMessage = styled.div`
display: flex;
flex-direction: columns;
width: 100%
color: #9da8a8;
padding: 5px;
cursor: pointer;

.input{
    width: 50%;
}
.textareaSub{
    width: 100%;
}
.textareaBody{
    width: 100%;
    height: 50vh;
}

`;
