import React from 'react';
import { storiesOf } from '@kadira/storybook';

// For props table
import IconButton from 'src/IconButton';

import BasicIconButtonExample from './BasicIconButton';
import IconButtonWithStatusExample from './IconButtonWithStatus';

storiesOf('IconButton', module)
    .addWithInfo(
        'basic usage',
        'TODO: fix button color',
        () => <BasicIconButtonExample />
    )
    .addWithInfo('with status', () => <IconButtonWithStatusExample />)
    // Props table
    .addPropsTable(
        () => <IconButton icon="null" />,
        'check `<Button>` props table for more available props.'
    );
