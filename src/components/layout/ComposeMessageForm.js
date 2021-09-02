// import React from 'react';
// import { useForm } from 'react-hook-form';
// import styled from 'styled-component';
// import CloseIcon from '@material-ui/icons/Close';

// function ComposeMessageForm() {
//     const { register, handleSubmit, formState: { errors } } = useForm();
//   const onSubmit = data => console.log(data);
//   console.log(errors);

//   return (
//     <Wrapper>
//       <CloseIcon />
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input type="email" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
//       <textarea {...register("Subject", {required: true, maxLength: 250})} />
//       <textarea {...register("Message Content", {required: true})} />

//       <input type="submit" />
//     </form>
//     </Wrapper>
//   );
// }

// export default ComposeMessageForm;

// const Wrapper = styled.div`
// `
