import { Card, Typography } from '@material-tailwind/react'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import CustomButton from '../../../components/CustomButton'
import StackedBarLineCatalogChart from '../../Catalog/TabsCatalog/CatalogCharts.jsx/StackedBarLineCatalogChart'
import LineCatalogChart from '../../Catalog/TabsCatalog/CatalogCharts.jsx/LineCatalogChart'

const LifeTimeValueChartCustomer = () => {
  return (
    <div>
       <Card className="mt-6 lg:w-96 p-4 py-10 h-auto w-11/12 mx-auto">
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Area infected by Alien
          </Typography>
          <Typography className='mb-4'>
            The area infected by Alien is the area of the Earth that has been infected by the Alien.
            </Typography>
          <LineCatalogChart />
        </Card>
    </div>
  )
}

export default LifeTimeValueChartCustomer
