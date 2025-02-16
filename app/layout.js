import './globals.css';
import MainHeader from "@foodie-dash/app/components/main-header";
import MainHeaderBackground from "@foodie-dash/app/components/main-header-background";

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeaderBackground />
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
