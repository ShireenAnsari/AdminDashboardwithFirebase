import './Table.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const TablesCompo = () => {
    const rows=[
        {
            id:1143155,
            product:'Acer Nitro 5',
            img:'/avatar.png',
            customer:'John Smith',
            date:'1 March',
            amount:785,
            method:'Cash on Delievery',
            status:'Approved'
        },
        {
            id:1147458,
            product:'Acer Nitro 5',
            img:'/avatar.png',
            customer:'John Smith',
            date:'1 March',
            amount:785,
            method:'Cash on Delievery',
            status:'Pending'
        },
        {
            id:114787585,
            product:'Acer Nitro 5',
            img:'/avatar.png',
            customer:'John Smith',
            date:'1 March',
            amount:785,
            method:'Cash on Delievery',
            status:'Approved'
        }
    ]
  return (
 
    <TableContainer component={Paper} className='table'>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell className='tableCell'>Tracking ID</TableCell>
          <TableCell className='tableCell'>Product</TableCell>
          <TableCell className='tableCell'>Customer</TableCell>
          <TableCell className='tableCell'>Date</TableCell>
          <TableCell className='tableCell'>Amount</TableCell>
          <TableCell className='tableCell'>Payment Method</TableCell>
          <TableCell className='tableCell'>Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.id}
          >
            <TableCell className='tableCell'>
              {row.id}
            </TableCell>
            <TableCell className='tableCell'>
                <div className="cellWrapper">
                    <img className='image' src={row.img} alt="" srcset="" />
                    {row.product}
                </div>
            </TableCell>
            <TableCell className='tableCell'>{row.customer}</TableCell>
            <TableCell className='tableCell'>{row.date}</TableCell>
            <TableCell className='tableCell'>{row.amount}</TableCell>
            <TableCell className='tableCell'>{row.method}</TableCell>
            <TableCell className='tableCell'>
                <span className={`status ${row.status}`}>
                    {row.status}

                </span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default TablesCompo