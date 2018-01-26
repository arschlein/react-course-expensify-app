import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import HelpPage from '../components/HelpPage';
import EditExpensePage from '../components/EditExpensePage';
import AddExpensePage from '../components/AddExpensePage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} /> {/*exact určuje, že se bude zobrazovat pouze homepage, jinak by se ukazovala i na všech ostatních stránkách skrz path="/"*/}
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit/:id" component={EditExpensePage} /> {/*id je dynamicka cast adresy, je v props.match.params.id*/}
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch> {/*switch způsobí to, že se projíždí prvky v něm a pokud se prvek nenajde, zobrazí se NotFoundPage*/}
        </div>
    </BrowserRouter>
);
export default AppRouter;