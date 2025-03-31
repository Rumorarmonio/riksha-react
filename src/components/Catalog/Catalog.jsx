import React, {useRef} from 'react';
import qs from 'qs';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {InfoBlock} from './InfoBlock/InfoBlock';
import {Sort} from './Sort/Sort';
import {FoodList} from './FoodList/FoodList';
import {selectFilter, selectSearchValue, setCategoryId, setCurrentPage, setFilters} from '../../redux/slices/filterSlice';
import {sortTypes} from '../../assets/data/arrays';
import {fetchProducts, selectProducts} from '../../redux/slices/productsSlice';

export function Catalog() {
  console.log('catalog rendered');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isSearch = useRef(false);
  const isMounted = useRef(false);

  const { categoryId, sortType, currentPage } = useSelector(selectFilter);
  const { products, status } = useSelector(selectProducts);

  function onChangeCategory(id) {
    dispatch(setCategoryId(id));
  }

  // TODO: count pages in code and remove hardcoded number
  function onChangePage(number) {
    dispatch(setCurrentPage(number));
  }

  const searchValue = useSelector(selectSearchValue);

  async function getProducts() {
    const sortBy = sortType.sortProperty.replace('-', '');
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    // const category = categoryId > 0 ? `category=${categoryId}` : ''
    // TODO: search by name
    const search = searchValue ? `&search=${searchValue}` : '';

    dispatch(
      fetchProducts({
        sortBy,
        order,
        search,
        currentPage,
      }),
    );
  }

  // TODO: fix multiple renderings
  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sortType.sortProperty,
        categoryId,
        currentPage,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;

    if (!isSearch.current) {
      getProducts();
    }

    // isSearch.current = false
    // window.scrollTo(0, 0)
  }, [categoryId, sortType.sortProperty, searchValue, currentPage]);

  // TODO: fix getting params from query string
  React.useEffect(() => {
    // console.log(qs.parse(window.location.search.substring(1)))
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      const sortType = sortTypes.find(obj =>
        obj.sortProperty === params.sortProperty,
      );

      dispatch(
        setFilters({
          ...params,
          sortType,
        }),
      );
      isSearch.current = true;
    }
  }, []);

  return (
    <>
      <Sort/>
      <FoodList
        items={products}
        status={status}
        currentPage={currentPage}
        onChangePage={onChangePage}
      />
      <InfoBlock/>
    </>
  );
}
