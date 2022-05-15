import React from "react";
import Layout from "../../components/Layout";
import { Container, Form, Row, Col } from "react-bootstrap";

/**
 * @author
 * @function Signin
 **/

const Signin = (props) => {
  return (
    <Layout>
      <Container>
        <Row>
          <Col>
            <form>
              <form>
                <div class="form-group">
                  <label for="exampleFormControlInput1">Email address</label>
                  {/* <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"> */}
                </div>
                <div class="form-group">
                  <label for="exampleFormControlSelect1">Example select</label>
                  <select class="form-control" id="exampleFormControlSelect1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="exampleFormControlSelect2">
                    Example multiple select
                  </label>
                  <select
                    multiple
                    class="form-control"
                    id="exampleFormControlSelect2"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1">
                    Example textarea
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
              </form>
            </form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Signin;
