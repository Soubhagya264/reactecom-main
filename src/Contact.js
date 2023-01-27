import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
  height:100%;
   background-color: ${({theme})=>theme.colors.bg} ;
    padding: 9rem 0 5rem 0;
    text-align: center;
    

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return <Wrapper>
  <h2 className="common-heading">Contact Page</h2>
     <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119617.6359386904!2d85.79770520938911!3d20.463093327796074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190d832223af81%3A0x22f5fa1c913be52e!2sCuttack%2C%20Odisha!5e0!3m2!1sen!2sin!4v1674286213134!5m2!1sen!2sin"
       width="90%"
        height="400" style={{border:0}} allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">

     </iframe>

     <div className="container">
      <div className="contact-form">
        <form action="" method="POST" className="contact-inputs">
          <input type="text" placeholder="username" name="username" required autocomplete="off"/>
          <input type="email" placeholder="Email" name="Email" required autocomplete="off"/>
          <textarea name="message" placeholder="Enter your message" cols="30" rows="10" required autocomplete="off"/> 
          <input type="submit" value="send"></input>
        </form>
      </div>
     </div>

  </Wrapper>;
};

export default Contact;
