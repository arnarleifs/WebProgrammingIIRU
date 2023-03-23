import React from "react";
import { Outlet } from "react-router-dom";
import { NavigationBar } from "../../components/navigation-bar/navigation-bar";
import styles from './main-layout.module.css';

export const MainLayout = () => (
  <>
    <NavigationBar />
    <main className={styles.mainLayout}>
      <Outlet />
    </main>
  </>
);