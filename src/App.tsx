import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { ThemeToggle } from './components/ThemeToggle';
import { SideNav } from './components/SideNav';
import { Home } from './pages/Home';
import { AboutPage } from './pages/AboutPage';
import { FormsPage } from './pages/FormsPage';
import { TablesPage } from './pages/TablesPage';
import { DragDropPage } from './pages/DragDropPage';
import { DynamicElementsPage } from './pages/DynamicElementsPage';
import { FileUploadPage } from './pages/FileUploadPage';
import { FileDownloadPage } from './pages/FileDownloadPage';
import { IframePage } from './pages/IframePage';
import { ContextMenuPage } from './pages/ContextMenuPage';
import { HoverPage } from './pages/HoverPage';
import { NotificationsPage } from './pages/NotificationsPage';
import { ABTestingPage } from './pages/ABTestingPage';
import { AuthPage } from './pages/AuthPage';
import { BrokenImagesPage } from './pages/BrokenImagesPage';
import { CheckboxesPage } from './pages/CheckboxesPage';
import { ExitIntentPage } from './pages/ExitIntentPage';
import { SliderPage } from './pages/SliderPage';
import { AlertsPage } from './pages/AlertsPage';
import { KeyPressPage } from './pages/KeyPressPage';
import { ShadowDOMPage } from './pages/ShadowDOMPage';

function App() {
  return (
    <ThemeProvider>
      <Router basename="/test-automation-practice">
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors flex">
          <SideNav />
          <div className="flex-1 ml-64">
            <ThemeToggle />
            <main className="p-6">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/forms" element={<FormsPage />} />
                <Route path="/tables" element={<TablesPage />} />
                <Route path="/drag-drop" element={<DragDropPage />} />
                <Route path="/dynamic-elements" element={<DynamicElementsPage />} />
                <Route path="/file-upload" element={<FileUploadPage />} />
                <Route path="/file-download" element={<FileDownloadPage />} />
                <Route path="/iframes" element={<IframePage />} />
                <Route path="/context-menu" element={<ContextMenuPage />} />
                <Route path="/hover" element={<HoverPage />} />
                <Route path="/notifications" element={<NotificationsPage />} />
                <Route path="/ab-testing" element={<ABTestingPage />} />
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/broken-images" element={<BrokenImagesPage />} />
                <Route path="/checkboxes" element={<CheckboxesPage />} />
                <Route path="/exit-intent" element={<ExitIntentPage />} />
                <Route path="/slider" element={<SliderPage />} />
                <Route path="/alerts" element={<AlertsPage />} />
                <Route path="/key-press" element={<KeyPressPage />} />
                <Route path="/shadow-dom" element={<ShadowDOMPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;