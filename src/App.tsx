import { Route, Routes } from 'react-router-dom'

import { Sidebar } from '@/components/ui/sidebar'
import { useBreadcrumbs } from '@/components/ui/sidebar/bread-crumbs'
import { Breadcrumb, Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'

export function App() {
  const { selectedKeys } = useBreadcrumbs()

  return (
    <Layout style={{ backgroundColor: 'var(--color-green-desaturated)' }}>
      <Layout>
        <Sidebar />
        <Layout style={{ backgroundColor: 'var(--color-green-desaturated)' }}>
          <Content
            style={{
              margin: '0 20px',
            }}
          >
            <Breadcrumb
              items={selectedKeys.map(i => ({ title: i }))}
              separator={'>'}
              style={{
                fontSize: 16,
                margin: '40px 0 20px 20px',
              }}
            />
            <div
              style={{
                background: 'white',
                borderRadius: 16,
                minHeight: 360,
                padding: 21,
              }}
            >
              <Routes>
                <Route element={<span>publications</span>} path={'/publications'} />
              </Routes>
            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}
