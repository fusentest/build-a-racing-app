import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="bg-primary text-primary-foreground p-4">
        <h1 className="text-2xl font-bold">Racing App</h1>
      </header>
      <main className="flex-grow container mx-auto p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
