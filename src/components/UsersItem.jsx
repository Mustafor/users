import React from 'react';
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Card } from 'antd';
const { Meta } = Card;
const UserItem = ({item, handleLikeBtnClick, handleSavedBtncClick}) => (
  <Card
    style={{
      width: 300,
    }}
    cover={
      <img
        alt="example"
        src={item.image}
      />
    }
    actions={[
      <HeartOutlined onClick={handleLikeBtnClick} className='scale-[1.5]' />,
      <ShoppingCartOutlined onClick={handleSavedBtncClick} className='scale-[1.5]' />,
    ]}
  >
    <Meta
      title={`${item.firstName} - ${item.lastName}`}
      description={item.email}
    />
  </Card>
);
export default UserItem;