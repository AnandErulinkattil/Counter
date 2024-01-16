import React, { useState } from 'react'
import { Button, Container, Card } from 'react-bootstrap';
import './Counter.css'

export default function Counter() {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count === 0) {
      alert("Counter cannot go below zero!");
      return;
    }
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };
  return (
    <div>
      <Container className="Counter1 my-3 bg-dark">
        <Card className=" my-4 bg-dark">
          <Card.Body>
            <h1 className="text-white">Counter</h1>
            <div className="Display1 my-5">
              <h2>{count}</h2>
            </div>
            <Button variant="outline-primary" onClick={() => increase()} className="mx-2">Increment</Button>
            <Button variant="outline-danger"
              onClick={() => decrease()}>
              Decrement</Button>
            <Button variant="outline-secondary" onClick={() => reset()} className="mx-2">Reset</Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  )
}
