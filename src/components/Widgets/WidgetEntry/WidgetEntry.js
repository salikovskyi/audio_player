import React from 'react'
import css from './WidgetEntry.module.css'

function WidgetEntry({title, subtitle, image}) {
  return (
    <div className={css.entry_body}>
        <img src={image} alt={title} className={css.entry_image}/>
        <div className={css.entry_right_body}>
            <p className={css.entry_title}>{title}</p>
            <p className={css.entry_subtitle}>{subtitle}</p>
        </div>
    </div>
  )
}

export default WidgetEntry