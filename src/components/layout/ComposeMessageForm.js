import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import axios from "axios";

function ComposeMessageForm() {
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
        authorization: "Token f44f08ea1919da2b02d3bc754f0b42cca40f1224",
        "content-type": "application/json",
      },
    })
      .then((res) => console.log(res))
      .catch(function (error) {
        // display message error on screen
      })

    console.log(errors);
  };

  return (
    <Wrapper>
      <WrapperComposeMessage>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="input"
            type="text"
            placeholder="To whom?"
            {...register("receiver", { required: true })}
          />
          <textarea
            className="textareaSub"
            type="text"
            placeholder="Subject?"
            {...register("title", { required: true, maxLength: 250 })}
          />
          <textarea
            className="textareaBody"
            type="text"
            placeholder="What's your message?"
            {...register("body", { required: true })}
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
