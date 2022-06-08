import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavigationView from '../NavigationView';
import IndexView from '../IndexView';
import ReadView from '../ReadView';
import CreateView from '../CreateView';
import UpdateView from '../UpdateView';
import Layout from "../../components/Layout/Layout";
import './RootView.css';

function RootView() {
  return (
    <BrowserRouter>
      <div className="sidebar">
        <div className="logo-container">
          <i className='bx bx-cart'></i>
          <span className="page-name">MyShop</span>
        </div>
        <NavigationView />
      </div>
      <section className="main-section">
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<IndexView />} />
            <Route path="products">
              <Route path=":productId">
                <Route index element={<ReadView />} />
                <Route path="ads">
                  <Route path="create" element={<CreateView />} />
                  <Route path=":adId" element={<UpdateView />} />
                </Route>
              </Route>
            </Route>
            <Route path="*" element={<h1>Not Found</h1>} />
          </Route>
        </Routes>
      </section>
    </BrowserRouter >
  );
}

export default RootView;
