import React from 'react';
import {Image, Segment,} from 'semantic-ui-react'

export default class NotFoundPage {
    render() {
        return(
            <div className='404'>
                <Segment>
                    <Image src='https://loremflickr.com/640/360'/>
                </Segment>
            </div>
        );
    }
}