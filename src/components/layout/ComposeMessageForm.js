import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import axios from "axios";

function ComposeMessageForm(props) {
  const { token } = props;
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [errorMessage, setErrorMessage] = useState(null);



  const onSubmit = (data) => {
    console.log(data);

    setErrorMessage(null)

    axios({
      method: "post",
      url: "https://messaging-test.bixly.com/messages/",
      data,
      headers: {
        authorization: "Token " + token,
            "content-type": "application/json",
      },
    })
      .then((res) => {
        reset()

      })

      .catch(function (error) {
        setErrorMessage(error.message)

      })

    console.log(errors);
  };

  return (
    <Wrapper>
      <WrapperError>
       {errorMessage && <p>There was an error: {errorMessage}</p>}
       </WrapperError>
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

const WrapperError = styled.div`
background-color: red
`;

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
