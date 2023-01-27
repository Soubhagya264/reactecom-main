import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useProductContext } from "./context/productcontext";
import { useEffect } from "react";
import PageNavigation from "./components/PageNavigation";
import MyImage from "./components/MyImage";
import FormatPrice from "./Helper/FormatPrice";
import {TbReplace, TbTruckDelivery} from "react-icons/tb";
import {MdSecurity} from "react-icons/md";
import AddToCart from "./components/AddToCart";
import Star from "./components/Star";
const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }
  height:100vh;
   background-color: ${({ theme }) => theme.colors.bg} ;
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

const SingleProduct = () => {

  const API = "https://fakestoreapi.com/products"

  const { getSingleProduct, isSingleLoading, Singleproduct } = useProductContext()

  const { id } = useParams();

  const {
    id: alias,
    category,
    title,
    description,
    price,
    rating,
    image
  } = Singleproduct;


  useEffect(() => {
    getSingleProduct(`${API}/${id}`);
  }, [])

 


  if (isSingleLoading) {
    return <div className="page_loading">Loading .......</div>
  }

  return (
    <Wrapper>
      <PageNavigation title={category} />
      <Container className="container">
        <div className="grid grid-two-column">
          <div className="product_images">
            <MyImage image={image} />
          </div>
          <div className="product-data">
            <h2>{title}</h2>
            <Star stars={rating.rate} reviews={rating.count} />
            <p className="product-data-price">
              MRP:
              <del>
                <FormatPrice price={price+3000}/>
              </del>
            </p>
            <p className="product-data-price product-data-real-price">
              Deal of the Day : <FormatPrice price={price}/>
            </p>
            <p>{description}</p>
            <div className="product-data-warranty">
            <div className="product-warranty-data">
              <TbTruckDelivery className="warranty-icon" />
              <p>Free Delivery</p> 
            </div>
            <div className="product-warranty-data">
              <TbReplace className="warranty-icon" />
              <p>30 Days Replacement</p> 
            </div>
            <div className="product-warranty-data">
              <MdSecurity className="warranty-icon" />
              <p>1 Year Warranty</p> 
            </div>
            
            </div>
            <AddToCart product={Singleproduct}/>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

const Container=styled.div`
width:100%;
padding: :0rem 12rem;
`

export default SingleProduct;
