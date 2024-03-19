import { Navigate, Route, Routes, useLocation } from 'react-router-dom'

import { Footer } from '@/components/ui/components/footer'
import { MainHeader } from '@/components/ui/components/header/header'
import { Sidebar } from '@/components/ui/components/sidebar'
import { Timeline } from '@/components/ui/components/timeline'
import { LineGraph } from '@/components/ui/diagrams/line-graph'
import { data } from '@/data'
import { useAppSelector } from '@/hooks/use-app-selector.ts'
import { useWindowSize } from '@/hooks/use-window-size'
import { Breadcrumb, Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'

export function App() {
  const { width } = useWindowSize()
  const location = useLocation()

  const currentPath = location.pathname

  const isMobile = width && width <= 730
  const url = useAppSelector(state => state.breadCrumbs.link)

  return (
    <Layout
      style={{
        backgroundColor: 'var(--color-green-desaturated)',
        // height: isMobile ? '' : '100vh',
        height: '100vh',
        overflowY: 'auto',
      }}
    >
      <Layout
        style={{
          backgroundColor: 'white',
        }}
      >
        {currentPath !== '/about_search' ? isMobile ? <MainHeader /> : <Sidebar /> : null}
        <Layout
          style={{
            backgroundColor: 'var(--color-green-desaturated)',
            marginTop: `${isMobile && currentPath !== '/about_search' ? '60px' : 0}`,
            overflowY: 'auto',
          }}
        >
          <Content
          // style={{
          //   margin: '0 20px',
          // }}
          >
            {currentPath !== '/about_search' ? (
              <Breadcrumb
                items={url.map(i => ({ title: i }))}
                separator={'>'}
                style={{
                  fontSize: 16,
                  margin: '40px 0 20px 20px',
                }}
              />
            ) : (
              ''
            )}
            <div
            // style={{
            //   background: 'white',
            //   borderRadius: 16,
            //   minHeight: 360,
            //   padding: 21,
            // }}
            >
              <Routes>
                <Route
                  element={
                    <div>
                      <Timeline />
                      <Footer />
                    </div>
                  }
                  path={'/about_search'}
                />
                <Route element={<Navigate to={'/about_search'} />} path={'/'} />
                <Route
                  element={
                    <div>
                      <LineGraph data={data} isTooltip legend variant={'linear'} />
                    </div>
                  }
                  path={'/publications'}
                />
              </Routes>
            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}
