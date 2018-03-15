def transpose(arr)
  new_arr = []
  i = 0
  while i < arr.length
    new_row = []
    j = 0
    while j < arr.length
      new_row << arr[j][i]
      j += 1
    end
    i += 1
    new_arr << new_row
  end

  new_arr
end
