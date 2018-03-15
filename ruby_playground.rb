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

def bubble_sort(arr, &prc)
  prc ||= Proc.new { |x, y| x <=> y }

  sorting = true
  while sorting
    sorting = false
    i = 0
    (i...arr.length - 1).each do |idx1|
      j = i + 1
      (j..arr.length).each do |idx2|
        if prc.call(arr[idx1], arr[idx2]) == 1
          arr[idx1], arr[idx2] = arr[idx2], arr[idx1]
          sorting = true
        end
      end
    end
  end

  arr
end

def substrings(str)
  subs = []

  i = 0
  while i < str.length - 1
    j = i + 1
    while j < str.length

      subs << str.slice(i, j)
    end
  end

  subs
end




(x <=> y)



 callback = function(v1, v2) {
  return v1 > v2;
 }
















#
