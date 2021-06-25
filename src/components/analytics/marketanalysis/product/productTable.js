import React from 'react'
import {Button} from '@material-ui/core'

const ProductTable = () => {
    return (
        <div>
            <table class="table">
  <thead>
    <tr>
      <th scope="col">Sku Name</th>
      <th scope="col">No. of Retailers</th>
      <th scope="col">Average Value</th>
      <th scope="col">Active Users</th>
      <th scope="col">Add to compare</th>
      
    </tr>
  </thead>
  <tbody>
  
     <tr>
      <td>Four Square Special</td>
      <td>40</td>
      <td>120.00</td>
      <td>25</td>
      <td><Button variant="contained" color="primary">Add</Button></td>
    </tr>

    <tr>
      <td>Four Square Special</td>
      <td>40</td>
      <td>120.00</td>
      <td>25</td>
      <td><Button variant="contained" color="primary">Add</Button></td>
    </tr>
  
  </tbody>
</table>
        </div>
    )
}

export default ProductTable
