import './App.css'
import { Button } from './lib/components/button'
import { Card } from './lib/components/card'

function App() {
  return (
    <>
      <div className='flex flex-col gap-lg'>
        <h1 className="flex justify-center text-3xl font-bold text-primary">
          Hello world!
        </h1>
        <div className='flex gap-md justify-center'>
          <Button>
            Button Filled
          </Button>
          <Button className="" color='primary'>
            Button
          </Button>
        </div>
        <div className='flex gap-md justify-center'>
          <Card>Card</Card>
        </div>
      </div>
    </>
  )
}

export default App
