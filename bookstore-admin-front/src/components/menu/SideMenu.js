import React from 'react';
import './SidebarNav.min.css';

function SideMenu(props) {
    return (
        <div className="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left" id="cbp-spmenu-s1">
            {/*left-fixed -navigation*/}
            <aside className="sidebar-left">
                <nav className="navbar navbar-inverse">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".collapse" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>
                        <h1><a className="navbar-brand" href="index.html"><span className="fa fa-area-chart" /> Glance<span className="dashboard_text">Design dashboard</span></a></h1>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="sidebar-menu">
                            <li className="header">MAIN NAVIGATION</li>
                            <li className="treeview">
                                <a href="index.html">
                                    <i className="fa fa-dashboard" /> <span>Dashboard</span>
                                </a>
                            </li>
                            <li className="treeview">
                                <a href="#">
                                    <i className="fa fa-book" />
                                    <span>Danh mục</span>
                                    <i className="fa fa-angle-left pull-right" />
                                </a>
                                <ul className="treeview-menu">
                                    <li><a href="grids.html"><i className="fa fa-angle-right" /> Grids</a></li>
                                    <li><a href="media.html"><i className="fa fa-angle-right" /> Media Css</a></li>
                                </ul>
                            </li>
                            <li className="treeview">
                                <a href="charts.html">
                                    <i className="fa fa-shopping-cart" />
                                    <span>Bán hàng</span>
                                    {/* <span className="label label-primary pull-right">new</span> */}
                                    <i className="fa fa-angle-left pull-right" />
                                </a>
                            </li>
                            <li className="treeview">
                                <a href="charts.html">
                                    <i className="fa fa-comments" />
                                    <span>Đánh giá</span>
                                </a>
                            </li>
                            <li className="treeview">
                            </li><li className="treeview">
                                <a href="#">
                                    <i className="fa fa-archive" />
                                    <span>Tuyển tập</span>
                                    <i className="fa fa-angle-left pull-right" />
                                </a>
                                <ul className="treeview-menu">
                                    <li><a href="general.html"><i className="fa fa-angle-right" /> General</a></li>
                                    <li><a href="icons.html"><i className="fa fa-angle-right" /> Icons</a></li>
                                    <li><a href="buttons.html"><i className="fa fa-angle-right" /> Buttons</a></li>
                                    <li><a href="typography.html"><i className="fa fa-angle-right" /> Typography</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="widgets.html">
                                    <i className="fa fa-pencil-square-o" /> <span>Tác giả</span>
                                    <small className="label pull-right label-info">08</small>
                                </a>
                            </li>
                            <li className="treeview">
                                <a href="#">
                                    <i className="fa fa-gift" /> <span>Khuyến mại</span>
                                    <i className="fa fa-angle-left pull-right" />
                                </a>
                                <ul className="treeview-menu">
                                    <li><a href="forms.html"><i className="fa fa-angle-right" /></a></li>
                                    <li><a href="validation.html"><i className="fa fa-angle-right" /> Form Validations</a></li>
                                </ul>
                            </li>
                            <li className="treeview">
                                <a href="#">
                                    <i className="fa fa-globe" /> <span>Nhà xuất bản</span>
                                    <i className="fa fa-angle-left pull-right" />
                                </a>
                                <ul className="treeview-menu">
                                    <li><a href="tables.html"><i className="fa fa-angle-right" /> Simple tables</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    {/* /.navbar-collapse */}
                </nav>
            </aside>
        </div>
    )
}

export default SideMenu;