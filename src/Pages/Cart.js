import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Delete, Desincrement, add } from '../Store/productSlice';
import cart_cross from '../Assets/cart_cross_icon.png';

function Cart() {
  const productStore = useSelector((state) => state.product.prostore);
  const total = useSelector((state) => state.product.total);
  const dispatch = useDispatch();

  const increment = (id, Quantite) => {
    dispatch(add({ id: id, qte: Quantite }));
  };

  const desincrement = (id, Quantite) => {
    dispatch(Desincrement({ id: id, qte: Quantite }));
  };

  const deletecart = (id, Quantite) => {
    dispatch(Delete({ id: id, qte: Quantite }));
  };

  return (
    <>
      {productStore.length > 0 && (
        <div>
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              marginTop: '20px',
            }}
          >
            <thead>
              <tr>
                <th style={tableHeaderStyle}>Image</th>
                <th style={tableHeaderStyle}>Name</th>
                <th style={tableHeaderStyle}>Price</th>
                <th style={tableHeaderStyle}>Quantity</th>
                <th style={tableHeaderStyle}></th>
              </tr>
            </thead>
            <tbody>
              {productStore.map((p, index) => (
                <tr key={index} style={tableRowStyle}>
                  <td style={tableCellStyle}>
                    <img src={p.image} alt='' width='50px' />
                  </td>
                  <td style={tableCellStyle}>{p.name}</td>
                  <td style={tableCellStyle}>{p.price} $</td>
                  <td style={tableCellStyle}>
                    <button
                      style={{
                        marginRight: '10px',
                        backgroundColor: 'gray',
                        fontWeight: 'bold',
                      }}
                      type='button'
                      onClick={() => desincrement(p.id, p.qte)}
                    >
                      -
                    </button>
                    {p.qte}
                    <button
                      style={{
                        marginLeft: '10px',
                        backgroundColor: 'gray',
                        fontWeight: 'bold',
                      }}
                      type='button'
                      onClick={() => increment(p.id, p.qte)}
                    >
                      +
                    </button>
                  </td>
                  <td style={tableCellStyle} onClick={() => deletecart(p.id, p.qte)}>
                    <img src={cart_cross} alt='' width='' />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2%' }}>
            <span style={{ fontWeight: 'bold', marginLeft: '10px', fontSize: '20px' }}>Total :</span>{' '}
            <span style={{ fontWeight: '400', marginLeft: '10px', fontSize: '20px' }}>{total} $</span>
          </div>
        </div>
      )}
    </>
  );
}

const tableHeaderStyle = {
  backgroundColor: '#f2f2f2',
  padding: '12px',
  textAlign: 'left',
};

const tableRowStyle = {
  borderBottom: '1px solid #ddd',
};

const tableCellStyle = {
  padding: '12px',
  textAlign: 'left',
};

export default Cart;
