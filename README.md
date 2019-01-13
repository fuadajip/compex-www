# Compex WWW

<table>
    <tr>
        <th>Branch</th>
        <th>Pipeline</th>
        <th>Test coverage </th>
    </tr>
    <tr>
        <td>Master</td>
        <td>
            <a href="https://gitlab.com/inspirasia/core/core-www/commits/master">
                <img alt="pipeline status" src="https://gitlab.com/inspirasia/core/core-www/badges/master/pipeline.svg" />
            </a>
        </td>
        <td>
            <a shref="https://gitlab.com/inspirasia/core/core-www/commits/master">
                <img alt="coverage report" src="https://gitlab.com/inspirasia/core/core-www/badges/master/coverage.svg" />
            </a>
        </td>
    </tr>
</table>

# How To

## Run project

```shell
    yarn start
```

## Run storybook

Run storybook will give us more context of each components

```shell
    yarn storybook
```

## Run Test

Run test without coverage

```shell
    yarn test
```

Run test with code coverage

```shell
    yarn test:coverage
```

# Content

- [Card](#card)
- [Button](#button)
- [Breadcrumb](#breadcrumb)

## <a name="#card"></a> Card

<table>
    <tr>
        <th>Property</th>
        <th>Description</th>
        <th>Type</th>
        <th>Option Value</th>
        <th>Default</th>
    </tr>
    <tr>
        <td>title</td>
        <td>Set card header title</td>
        <td>
            <code>string</code>
        </td>
        <td>-</td>
        <td>
            <code>false</code>
        </td>
    </tr>
    <tr>
        <td>hoverable</td>
        <td>Set card on hover efect</td>
        <td>
            <code>boolean</code>
        </td>
        <td>-</td>
        <td>
            <code>false</code>
        </td>
    </tr>
    <tr>
        <td>size</td>
        <td>Set card size</td>
        <td>
            <code>string</code>
        </td>
        <td>small</td>
        <td>
            <code>false</code>
        </td>
    </tr>
    <tr>
        <td>extra</td>
        <td>Set extra component in card header, usually used ad card action in header</td>
        <td>
            <code>node</code>
        </td>
        <td>-</td>
        <td>
            <code>-</code>
        </td>
    </tr>
    <tr>
        <td>cover</td>
        <td>Create a card cover with passed image as props</td>
        <td>
            <code>string</code>
        </td>
        <td>-</td>
        <td>
            <code>-</code>
        </td>
    </tr>
    <tr>
        <td>footer</td>
        <td>Define card footer</td>
        <td>
            <code>node</code>
        </td>
        <td>-</td>
        <td>
            <code>false</code>
        </td>
    </tr>
    <tr>
        <td>style</td>
        <td>Define custom style for card</td>
        <td>
            <code>stylesheet</code>
        </td>
        <td>-</td>
        <td>
            <code>false</code>
        </td>
    </tr>
</table>

## <a name="#button"></a> Button

<table>
    <tr>
        <th>Property</th>
        <th>Description</th>
        <th>Type</th>
        <th>Option Value</th>
        <th>Default</th>
    </tr>
    <tr>
        <td>disabled</td>
        <td>Make button disabled</td>
        <td>
            <code>boolean</code>
        </td>
        <td>-</td>
        <td>
            <code>false</code>
        </td>
    </tr>
    <tr>
        <td>type</td>
        <td>Set button type</td>
        <td>
            <code>string</code>
        </td>
        <td>primary | success | warning | danger</td>
        <td>
            <code>true</code>
        </td>
    </tr>
    <tr>
        <td>icon</td>
        <td>Set button icon</td>
        <td>
            <code>node</code>
        </td>
        <td>-</td>
        <td>
            <code>false</code>
        </td>
    </tr>
    <tr>
        <td>iconPosition</td>
        <td>Set icon position inside the button</td>
        <td>
            <code>string</code>
        </td>
        <td>left | right </td>
        <td>
            <code>true</code>
        </td>
    </tr>
    <tr>
        <td>size</td>
        <td>set size of the button</td>
        <td>
            <code>string</code>
        </td>
        <td>small | large</td>
        <td>
            <code>true</code>
        </td>
    </tr>
    <tr>
        <td>block</td>
        <td>Set button width 100% match to parent</td>
        <td>
            <code>boolean</code>
        </td>
        <td>-</td>
        <td>
            <code>false</code>
        </td>
    </tr>
    <tr>
        <td>onClick</td>
        <td>Set button onClick function</td>
        <td>
            <code>(event) => void</code>
        </td>
        <td>-</td>
        <td>
            <code>false</code>
        </td>
    </tr>
</table>

## <a name="#breadcrumb"></a> Breadcrumb

<table>
    <tr>
        <th>Property</th>
        <th>Description</th>
        <th>Type</th>
        <th>Option Value</th>
        <th>Default</th>
    </tr>
    <tr>
        <td>separator</td>
        <td>Breadcrumb separator for breadcrumb item</td>
        <td>
            <code>string</code>
        </td>
        <td> / </td>
        <td>
            <code>true</code>
        </td>
    </tr>
</table>
