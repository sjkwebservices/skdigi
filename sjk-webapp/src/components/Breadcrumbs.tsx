import * as React from 'react';
import { Breadcrumb, IBreadcrumbItem, IDividerAsProps } from '@fluentui/react/lib/Breadcrumb';
import { Label, ILabelStyles } from '@fluentui/react/lib/Label';
import { TooltipHost } from '@fluentui/react/lib/Tooltip';
import { Icon } from '@fluentui/react/lib/Icon';

const labelStyles: Partial<ILabelStyles> = {
  root: { margin: '10px 0', selectors: { '&:not(:first-child)': { marginTop: 24 } } },
};

const itemsWithHref: IBreadcrumbItem[] = [
  // Normally each breadcrumb would have a unique href, but to make the navigation less disruptive
  // in the example, it uses the breadcrumb page as the href for all the items
  { text: 'Files', key: 'Files', href: '#/controls/web/breadcrumb' },
  { text: 'Folder 1', key: 'f1', href: '#/controls/web/breadcrumb' },
  { text: 'Folder 2', key: 'f2', href: '#/controls/web/breadcrumb' },
  { text: 'Folder 3', key: 'f3', href: '#/controls/web/breadcrumb' },
  { text: 'Folder 4 (non-clickable)', key: 'f4' },
  { text: 'Folder 5', key: 'f5', href: '#/controls/web/breadcrumb', isCurrentItem: true },
];


export const BreadcrumbBasicExample: React.FunctionComponent = () => {
  return (
    <div>
      <Label styles={labelStyles}>With items rendered as buttons</Label>
      <Breadcrumb
        items={itemsWithHref}
        maxDisplayedItems={10}
        ariaLabel="Breadcrumb with items rendered as buttons"
        overflowAriaLabel="More links"
      />
    </div>
  );
};
/*
function _onBreadcrumbItemClicked(ev: React.MouseEvent<HTMLElement>, item: IBreadcrumbItem): void {
  console.log(`Breadcrumb item with key "${item.key}" has been clicked.`);
}

function _getCustomDivider(dividerProps: IDividerAsProps): JSX.Element {
  const tooltipText = dividerProps.item ? dividerProps.item.text : '';
  return (
    <TooltipHost content={`Show ${tooltipText} contents`} calloutProps={{ gapSpace: 0 }}>
      <span aria-hidden="true" style={{ cursor: 'pointer', padding: 5 }}>
        /
      </span>
    </TooltipHost>
  );
}

function _getCustomOverflowIcon(): JSX.Element {
  return <Icon iconName={'ChevronDown'} />;
}
*/